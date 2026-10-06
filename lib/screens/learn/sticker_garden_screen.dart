import 'package:flutter/material.dart';
import '../../theme/app_colors.dart';
import '../../widgets/islamic_pattern_background.dart';
import '../../services/audio_service.dart';

class PlacedSticker {
  final String emoji;
  Offset position;

  PlacedSticker({required this.emoji, required this.position});
}

/// Screen 15 — Interactive Sticker Book & Good-Deed Garden
class StickerGardenScreen extends StatefulWidget {
  const StickerGardenScreen({Key? key}) : super(key: key);

  @override
  State<StickerGardenScreen> createState() => _StickerGardenScreenState();
}

class _StickerGardenScreenState extends State<StickerGardenScreen> {
  final List<String> _unlockedStickers = ['🌴', '🕌', '🌙', '⭐', '🐫', '⛲', '🌸', '🕊️'];
  final List<PlacedSticker> _gardenStickers = [
    PlacedSticker(emoji: '🕌', position: const Offset(140, 180)),
    PlacedSticker(emoji: '🌴', position: const Offset(60, 240)),
    PlacedSticker(emoji: '🌙', position: const Offset(200, 40)),
  ];

  void _addStickerToGarden(String emoji) {
    setState(() {
      _gardenStickers.add(
        PlacedSticker(
          emoji: emoji,
          position: Offset(100 + (_gardenStickers.length * 15) % 150, 150),
        ),
      );
    });
    AudioService.instance.playVoiceFeedback(context, 'Added $emoji sticker to your garden! ✨');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('🌸 My good-deed garden'),
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),
      body: IslamicPatternBackground(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              const Text(
                'Drag and place your earned stickers to decorate your garden!',
                style: TextStyle(fontSize: 14, color: AppColors.textMuted),
              ),
              const SizedBox(height: 12),

              // Unlocked Sticker Tray Bar
              Container(
                height: 70,
                padding: const EdgeInsets.symmetric(horizontal: 12),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                  boxShadow: [
                    BoxShadow(
                      color: AppColors.primaryTeal.withOpacity(0.08),
                      blurRadius: 10,
                      offset: const Offset(0, 4),
                    ),
                  ],
                ),
                child: ListView.builder(
                  scrollDirection: Axis.horizontal,
                  itemCount: _unlockedStickers.length,
                  itemBuilder: (context, index) {
                    final emoji = _unlockedStickers[index];
                    return GestureDetector(
                      onTap: () => _addStickerToGarden(emoji),
                      child: Container(
                        margin: const EdgeInsets.symmetric(horizontal: 8, vertical: 10),
                        padding: const EdgeInsets.all(8),
                        decoration: BoxDecoration(
                          color: AppColors.softTealBg,
                          borderRadius: BorderRadius.circular(14),
                        ),
                        child: Center(
                          child: Text(emoji, style: const TextStyle(fontSize: 26)),
                        ),
                      ),
                    );
                  },
                ),
              ),
              const SizedBox(height: 16),

              // Interactive Garden Canvas Arena
              Expanded(
                child: Container(
                  width: double.infinity,
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(
                      colors: [Color(0xFFE8F5E9), Color(0xFFC8E6C9)],
                      begin: Alignment.topCenter,
                      end: Alignment.bottomCenter,
                    ),
                    borderRadius: BorderRadius.circular(32),
                    border: Border.all(color: AppColors.primaryTeal.withOpacity(0.3), width: 2),
                  ),
                  child: Stack(
                    children: _gardenStickers.map((sticker) {
                      return Positioned(
                        left: sticker.position.dx,
                        top: sticker.position.dy,
                        child: GestureDetector(
                          onPanUpdate: (details) {
                            setState(() {
                              sticker.position += details.delta;
                            });
                          },
                          child: Container(
                            padding: const EdgeInsets.all(8),
                            decoration: BoxDecoration(
                              color: Colors.white.withOpacity(0.8),
                              shape: BoxShape.circle,
                            ),
                            child: Text(
                              sticker.emoji,
                              style: const TextStyle(fontSize: 44),
                            ),
                          ),
                        ),
                      );
                    }).toList(),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
