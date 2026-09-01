import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../models/child_model.dart';
import '../../providers/app_state_provider.dart';
import '../../theme/app_colors.dart';
import '../../widgets/faceless_avatar.dart';
import '../../widgets/islamic_pattern_background.dart';

/// Screen 10 — Kid-Friendly Visual Avatar Builder (Designed for 3+ years old)
class AvatarCustomizerScreen extends StatefulWidget {
  const AvatarCustomizerScreen({Key? key}) : super(key: key);

  @override
  State<AvatarCustomizerScreen> createState() => _AvatarCustomizerScreenState();
}

class _AvatarCustomizerScreenState extends State<AvatarCustomizerScreen> {
  late AvatarConfig _config;
  String _activeCategory = 'hairStyle'; // 'gender', 'hairStyle', 'hairColor', 'skinTone', 'eyeGlasses'

  final List<Color> _skinTones = const [
    Color(0xFFF5D0A0), // 1. Light Fair
    Color(0xFFE0AC69), // 2. Warm Tan
    Color(0xFFC68642), // 3. Golden Olive
    Color(0xFF8D5524), // 4. Deep Bronze
    Color(0xFF5C3317), // 5. Rich Mahogany
  ];

  final List<Map<String, dynamic>> _hairColors = const [
    {'color': Color(0xFF0E0E0E), 'name': 'Black'},
    {'color': Color(0xFF4A2E1B), 'name': 'Brown'},
    {'color': Color(0xFFD4A359), 'name': 'Blonde'},
  ];

  final List<Map<String, dynamic>> _maleHairStyles = const [
    {'index': 1, 'label': 'Short Crop 💇‍♂️', 'emoji': '👦'},
    {'index': 2, 'label': 'Curly Top 🦱', 'emoji': '🦱'},
    {'index': 3, 'label': 'Spiky Cut 🧑', 'emoji': '🧑'},
    {'index': 4, 'label': 'Buzz Cut 💈', 'emoji': '💈'},
    {'index': 5, 'label': 'Side Part 👦', 'emoji': '👨'},
  ];

  final List<Map<String, dynamic>> _femaleHairStyles = const [
    {'index': 1, 'label': 'Emerald Hijab 🧕', 'emoji': '🧕'},
    {'index': 2, 'label': 'Rose Hijab 🌸', 'emoji': '🌸'},
    {'index': 3, 'label': 'Crown Hijab 👑', 'emoji': '👑'},
    {'index': 4, 'label': 'Twin Tails 👧', 'emoji': '👧'},
    {'index': 5, 'label': 'Bob Cut 💇‍♀️', 'emoji': '💇‍♀️'},
  ];

  final List<Map<String, dynamic>> _eyeGlassesStyles = const [
    {'index': 1, 'label': 'Clean 🌟', 'emoji': '✨'},
    {'index': 2, 'label': 'Round 👓', 'emoji': '👓'},
    {'index': 3, 'label': 'Square 🤓', 'emoji': '🤓'},
    {'index': 4, 'label': 'Shades 🕶️', 'emoji': '🕶️'},
    {'index': 5, 'label': 'Star ⭐', 'emoji': '⭐'},
  ];

  @override
  void initState() {
    super.initState();
    final appState = Provider.of<AppStateProvider>(context, listen: false);
    _config = appState.activeChild.avatar;
  }

  @override
  Widget build(BuildContext context) {
    final appState = Provider.of<AppStateProvider>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('🎨 Create your avatar'),
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),
      body: IslamicPatternBackground(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(20),
          child: Column(
            children: [
              // Live Head Avatar Preview
              Container(
                padding: const EdgeInsets.all(18),
                decoration: BoxDecoration(
                  color: Colors.white,
                  shape: BoxShape.circle,
                  boxShadow: [
                    BoxShadow(
                      color: AppColors.accentGold.withOpacity(0.3),
                      blurRadius: 20,
                      offset: const Offset(0, 8),
                    ),
                  ],
                ),
                child: FacelessAvatarWidget(config: _config, size: 140),
              ),
              const SizedBox(height: 20),

              // 5 Main Visual Category Cards Grid
              GridView.count(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                crossAxisCount: 5,
                mainAxisSpacing: 8,
                crossAxisSpacing: 8,
                children: [
                  _buildCategoryTabCard('gender', '👦👧', 'Gender'),
                  _buildCategoryTabCard('hairStyle', '💇‍♂️', 'Style'),
                  _buildCategoryTabCard('hairColor', '🎨', 'Color'),
                  _buildCategoryTabCard('skinTone', '🖐️', 'Skin'),
                  _buildCategoryTabCard('eyeGlasses', '👓', 'Glasses'),
                ],
              ),
              const SizedBox(height: 20),

              // Sub-Grid of Clickable Sample Image Cards
              Container(
                padding: const EdgeInsets.all(18),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(28),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.04),
                      blurRadius: 12,
                      offset: const Offset(0, 4),
                    ),
                  ],
                ),
                child: _buildSubCategorySampleGrid(),
              ),
              const SizedBox(height: 24),

              // Save Button
              ElevatedButton.icon(
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primaryTeal,
                  minimumSize: const Size(double.infinity, 54),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                ),
                icon: const Icon(Icons.check_circle_rounded, size: 24),
                label: const Text('Save avatar 🎨', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                onPressed: () {
                  final updatedChild = appState.activeChild.copyWith(avatar: _config);
                  appState.updateChildProfile(updatedChild);
                  Navigator.pop(context);
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('MashaAllah! Avatar saved! ✨')),
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildCategoryTabCard(String key, String icon, String title) {
    final isSelected = _activeCategory == key;
    return GestureDetector(
      onTap: () => setState(() => _activeCategory = key),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        decoration: BoxDecoration(
          color: isSelected ? AppColors.primaryTeal : Colors.white,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: isSelected ? AppColors.primaryTeal : Colors.grey.shade300, width: 2),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(icon, style: const TextStyle(fontSize: 20)),
            const SizedBox(height: 2),
            Text(
              title,
              style: TextStyle(
                fontSize: 10,
                fontWeight: FontWeight.bold,
                color: isSelected ? Colors.white : AppColors.textDark,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSubCategorySampleGrid() {
    switch (_activeCategory) {
      case 'gender':
        return Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            _buildSampleCard('Boy 👦', '👦', _config.gender == 'boy', () {
              setState(() => _config = _config.copyWith(gender: 'boy'));
            }),
            _buildSampleCard('Girl 👧', '👧', _config.gender == 'girl', () {
              setState(() => _config = _config.copyWith(gender: 'girl'));
            }),
          ],
        );

      case 'hairStyle':
        final activeStyles = _config.gender == 'girl' ? _femaleHairStyles : _maleHairStyles;
        return GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 3,
            mainAxisSpacing: 10,
            crossAxisSpacing: 10,
            childAspectRatio: 1.1,
          ),
          itemCount: activeStyles.length,
          itemBuilder: (context, index) {
            final style = activeStyles[index];
            final isSelected = _config.hairStyleIndex == style['index'];
            return _buildSampleCard(
              style['label'],
              style['emoji'],
              isSelected,
              () => setState(() => _config = _config.copyWith(hairStyleIndex: style['index'])),
            );
          },
        );

      case 'hairColor':
        return Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: _hairColors.map((item) {
            final color = item['color'] as Color;
            final name = item['name'] as String;
            final isSelected = _config.hairColor == color;
            return GestureDetector(
              onTap: () => setState(() => _config = _config.copyWith(hairColor: color)),
              child: Column(
                children: [
                  Container(
                    width: 54,
                    height: 54,
                    decoration: BoxDecoration(
                      color: color,
                      shape: BoxShape.circle,
                      border: isSelected ? Border.all(color: AppColors.accentGold, width: 4) : Border.all(color: Colors.grey.shade300, width: 2),
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(name, style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: isSelected ? AppColors.primaryTeal : AppColors.textDark)),
                ],
              ),
            );
          }).toList(),
        );

      case 'skinTone':
        return Wrap(
          spacing: 14,
          runSpacing: 14,
          alignment: WrapAlignment.center,
          children: _skinTones.map((color) {
            final isSelected = _config.skinTone == color;
            return GestureDetector(
              onTap: () => setState(() => _config = _config.copyWith(skinTone: color)),
              child: Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                  color: color,
                  shape: BoxShape.circle,
                  border: isSelected ? Border.all(color: AppColors.accentGold, width: 4) : Border.all(color: Colors.grey.shade300, width: 2),
                ),
              ),
            );
          }).toList(),
        );

      case 'eyeGlasses':
      default:
        return GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 3,
            mainAxisSpacing: 10,
            crossAxisSpacing: 10,
            childAspectRatio: 1.1,
          ),
          itemCount: _eyeGlassesStyles.length,
          itemBuilder: (context, index) {
            final item = _eyeGlassesStyles[index];
            final isSelected = _config.eyeGlassesIndex == item['index'];
            return _buildSampleCard(
              item['label'],
              item['emoji'],
              isSelected,
              () => setState(() => _config = _config.copyWith(eyeGlassesIndex: item['index'])),
            );
          },
        );
    }
  }

  Widget _buildSampleCard(String label, String emoji, bool isSelected, VoidCallback onTap) {
    return GestureDetector(
      onTap: onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        padding: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          color: isSelected ? AppColors.softGoldBg : Colors.grey.shade50,
          borderRadius: BorderRadius.circular(18),
          border: Border.all(
            color: isSelected ? AppColors.accentGold : Colors.grey.shade300,
            width: isSelected ? 3 : 1,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(emoji, style: const TextStyle(fontSize: 26)),
            const SizedBox(height: 2),
            Text(
              label,
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 10,
                fontWeight: FontWeight.bold,
                color: isSelected ? AppColors.textGold : AppColors.textDark,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
