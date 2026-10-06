import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/app_state_provider.dart';
import '../../theme/app_colors.dart';
import '../../widgets/islamic_pattern_background.dart';
import 'parent_dashboard_screen.dart';

/// Interactive Parent Authentication Numpad Screen
class ParentAuthScreen extends StatefulWidget {
  const ParentAuthScreen({Key? key}) : super(key: key);

  @override
  State<ParentAuthScreen> createState() => _ParentAuthScreenState();
}

class _ParentAuthScreenState extends State<ParentAuthScreen> {
  String _enteredPin = '';
  String _errorMessage = '';
  int? _pressedKey;

  void _onKeyTap(String key) {
    setState(() {
      _errorMessage = '';
      _pressedKey = int.tryParse(key);
    });

    Future.delayed(const Duration(milliseconds: 150), () {
      if (mounted) setState(() => _pressedKey = null);
    });

    if (key == 'C') {
      setState(() => _enteredPin = '');
    } else if (key == '✓') {
      _verifyPin();
    } else {
      if (_enteredPin.length < 4) {
        setState(() {
          _enteredPin += key;
        });

        if (_enteredPin.length == 4) {
          _verifyPin();
        }
      }
    }
  }

  void _verifyPin() {
    final appState = Provider.of<AppStateProvider>(context, listen: false);
    final success = appState.verifyParentPin(_enteredPin);
    if (!success) {
      setState(() {
        _errorMessage = 'Incorrect PIN code. Try default 1234!';
        _enteredPin = '';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);

    if (appState.isParentAuthenticated) {
      return const ParentDashboardScreen();
    }

    return IslamicPatternBackground(
      child: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24.0),
          child: Container(
            padding: const EdgeInsets.all(24),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(32),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.08),
                  blurRadius: 20,
                  offset: const Offset(0, 8),
                ),
              ],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: const BoxDecoration(
                    color: AppColors.softTealBg,
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(
                    Icons.security_rounded,
                    size: 36,
                    color: AppColors.primaryTeal,
                  ),
                ),
                const SizedBox(height: 12),
                const Text(
                  'Parent dashboard lock',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: AppColors.textDark,
                  ),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Enter 4-digit parent PIN (default: 1234)',
                  style: TextStyle(fontSize: 12, color: AppColors.textMuted),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 20),

                // Bullet Indicator Display (Cleared start)
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: List.generate(4, (index) {
                    final isFilled = index < _enteredPin.length;
                    return AnimatedContainer(
                      duration: const Duration(milliseconds: 200),
                      margin: const EdgeInsets.symmetric(horizontal: 8),
                      width: 18,
                      height: 18,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: isFilled ? AppColors.primaryTeal : Colors.grey.shade200,
                        border: Border.all(
                          color: isFilled ? AppColors.primaryTeal : Colors.grey.shade400,
                          width: 2,
                        ),
                      ),
                    );
                  }),
                ),

                if (_errorMessage.isNotEmpty) ...[
                  const SizedBox(height: 12),
                  Text(
                    _errorMessage,
                    style: TextStyle(
                      fontSize: 12,
                      color: Colors.red.shade700,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
                const SizedBox(height: 24),

                // Highlighted Numpad Grid
                SizedBox(
                  width: 220,
                  child: GridView.builder(
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 3,
                      mainAxisSpacing: 12,
                      crossAxisSpacing: 12,
                    ),
                    itemCount: 12,
                    itemBuilder: (context, index) {
                      final keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '✓'];
                      final keyLabel = keys[index];
                      final isPressed = _pressedKey.toString() == keyLabel;

                      return GestureDetector(
                        onTap: () => _onKeyTap(keyLabel),
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 150),
                          transform: isPressed ? (Matrix4.identity()..scale(0.92)) : Matrix4.identity(),
                          decoration: BoxDecoration(
                            color: isPressed
                                ? AppColors.primaryTeal
                                : (keyLabel == '✓'
                                    ? AppColors.softTealBg
                                    : (keyLabel == 'C' ? Colors.grey.shade100 : Colors.white)),
                            borderRadius: BorderRadius.circular(18),
                            border: Border.all(
                              color: isPressed ? AppColors.primaryTeal : Colors.grey.shade300,
                              width: 1.5,
                            ),
                            boxShadow: [
                              BoxShadow(
                                color: Colors.black.withOpacity(0.04),
                                blurRadius: 6,
                                offset: const Offset(0, 3),
                              ),
                            ],
                          ),
                          child: Center(
                            child: Text(
                              keyLabel,
                              style: TextStyle(
                                fontSize: 20,
                                fontWeight: FontWeight.bold,
                                color: isPressed
                                    ? Colors.white
                                    : (keyLabel == '✓'
                                        ? AppColors.primaryTeal
                                        : (keyLabel == 'C' ? Colors.red.shade400 : AppColors.textDark)),
                              ),
                            ),
                          ),
                        ),
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
