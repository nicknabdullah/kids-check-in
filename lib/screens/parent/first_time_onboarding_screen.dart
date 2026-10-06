import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/app_state_provider.dart';
import '../../models/child_model.dart';
import '../../theme/app_colors.dart';
import '../../widgets/faceless_avatar.dart';
import '../../widgets/islamic_pattern_background.dart';

/// Screen shown on initial app launch when no children exist.
/// Guides parent through PIN setup and adding their own child.
class FirstTimeOnboardingScreen extends StatefulWidget {
  const FirstTimeOnboardingScreen({Key? key}) : super(key: key);

  @override
  State<FirstTimeOnboardingScreen> createState() => _FirstTimeOnboardingScreenState();
}

class _FirstTimeOnboardingScreenState extends State<FirstTimeOnboardingScreen> {
  int _currentStep = 1;
  final TextEditingController _pinController = TextEditingController(text: '1234');
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _ageController = TextEditingController(text: '7');
  AvatarConfig _avatarConfig = AvatarConfig();
  String _errorMessage = '';

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);

    return Scaffold(
      body: IslamicPatternBackground(
        child: Center(
          child: SingleChildScrollView(
            padding: const EdgeInsets.all(24),
            child: Container(
              padding: const EdgeInsets.all(24),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(32),
                boxShadow: [
                  BoxShadow(
                    color: AppColors.primaryTeal.withOpacity(0.12),
                    blurRadius: 20,
                    offset: const Offset(0, 8),
                  ),
                ],
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Text('🌟 Assalamu Alaikum!',
                      style: TextStyle(fontSize: 26, fontWeight: FontWeight.bold, color: AppColors.textDark)),
                  const SizedBox(height: 6),
                  const Text('Welcome to Kids good-deeds app',
                      style: TextStyle(fontSize: 15, color: AppColors.primaryTeal, fontWeight: FontWeight.w600)),
                  const SizedBox(height: 20),

                  if (_currentStep == 1) ...[
                    // Step 1: Set Parent Security PIN
                    const Icon(Icons.security_rounded, size: 48, color: AppColors.primaryTeal),
                    const SizedBox(height: 12),
                    const Text('Step 1: Set parent security PIN',
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: AppColors.textDark)),
                    const SizedBox(height: 6),
                    const Text('This PIN protects parent controls and reward customization.',
                        style: TextStyle(fontSize: 13, color: AppColors.textMuted), textAlign: TextAlign.center),
                    const SizedBox(height: 20),
                    TextField(
                      controller: _pinController,
                      keyboardType: TextInputType.number,
                      maxLength: 4,
                      textAlign: TextAlign.center,
                      style: const TextStyle(fontSize: 32, letterSpacing: 16, fontWeight: FontWeight.bold, color: AppColors.primaryTeal),
                      decoration: InputDecoration(
                        filled: true,
                        fillColor: AppColors.softTealBg,
                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(20), borderSide: BorderSide.none),
                      ),
                    ),
                    const SizedBox(height: 20),
                    if (_errorMessage.isNotEmpty)
                      Text(_errorMessage, style: const TextStyle(color: Colors.red, fontWeight: FontWeight.bold)),
                    const SizedBox(height: 10),
                    ElevatedButton(
                      style: ElevatedButton.styleFrom(backgroundColor: AppColors.primaryTeal, minimumSize: const Size(double.infinity, 54)),
                      onPressed: () {
                        if (_pinController.text.length == 4) {
                          appState.updateParentPin(_pinController.text);
                          setState(() {
                            _currentStep = 2;
                            _errorMessage = '';
                          });
                        } else {
                          setState(() => _errorMessage = 'PIN must be 4 digits!');
                        }
                      },
                      child: const Text('Next step ➔', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                    ),
                  ] else ...[
                    // Step 2: Add First Child Profile
                    const Text('Step 2: Add your child',
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: AppColors.textDark)),
                    const SizedBox(height: 16),
                    FacelessAvatarWidget(config: _avatarConfig, size: 100),
                    const SizedBox(height: 16),
                    TextField(
                      controller: _nameController,
                      decoration: InputDecoration(
                        labelText: 'Child\'s name (e.g. Maryam / Bilal)',
                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(16)),
                      ),
                    ),
                    const SizedBox(height: 12),
                    TextField(
                      controller: _ageController,
                      keyboardType: TextInputType.number,
                      decoration: InputDecoration(
                        labelText: 'Child\'s age (e.g. 6)',
                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(16)),
                      ),
                    ),
                    const SizedBox(height: 16),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        ChoiceChip(
                          label: const Text('Boy 👦'),
                          selected: _avatarConfig.gender == 'boy',
                          onSelected: (_) => setState(() => _avatarConfig = _avatarConfig.copyWith(gender: 'boy')),
                        ),
                        const SizedBox(width: 12),
                        ChoiceChip(
                          label: const Text('Girl 👧'),
                          selected: _avatarConfig.gender == 'girl',
                          onSelected: (_) => setState(() => _avatarConfig = _avatarConfig.copyWith(gender: 'girl')),
                        ),
                      ],
                    ),
                    const SizedBox(height: 24),
                    if (_errorMessage.isNotEmpty)
                      Text(_errorMessage, style: const TextStyle(color: Colors.red, fontWeight: FontWeight.bold)),
                    const SizedBox(height: 10),
                    ElevatedButton(
                      style: ElevatedButton.styleFrom(backgroundColor: AppColors.accentGold, minimumSize: const Size(double.infinity, 54)),
                      onPressed: () {
                        if (_nameController.text.trim().isNotEmpty) {
                          final newChild = ChildModel(
                            id: DateTime.now().millisecondsSinceEpoch.toString(),
                            name: _nameController.text.trim(),
                            age: int.tryParse(_ageController.text) ?? 6,
                            avatar: _avatarConfig,
                            specialTitle: 'Good Deeds Starter 🌟',
                          );
                          appState.completeFirstTimeSetup(_pinController.text, newChild);
                        } else {
                          setState(() => _errorMessage = 'Please enter your child\'s name!');
                        }
                      },
                      child: const Text('Save & Start App! 🚀'),
                    ),
                  ],
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
