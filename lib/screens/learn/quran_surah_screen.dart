import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../providers/app_state_provider.dart';
import '../../theme/app_colors.dart';
import '../../widgets/islamic_pattern_background.dart';
import '../../services/audio_service.dart';

class QuranVerse {
  final int number;
  final String arabic;
  final String transliteration;
  final String translation;

  QuranVerse({
    required this.number,
    required this.arabic,
    required this.transliteration,
    required this.translation,
  });
}

class QuranSurahItem {
  final String id;
  final String title;
  final String arabicTitle;
  final String englishMeaning;
  final int verseCount;
  final List<QuranVerse> verses;

  QuranSurahItem({
    required this.id,
    required this.title,
    required this.arabicTitle,
    required this.englishMeaning,
    required this.verseCount,
    required this.verses,
  });
}

/// Screen 16 — Quran Surahs Learning & Memorization Module (Male Qari Recitation)
class QuranSurahScreen extends StatefulWidget {
  const QuranSurahScreen({Key? key}) : super(key: key);

  @override
  State<QuranSurahScreen> createState() => _QuranSurahScreenState();
}

class _QuranSurahScreenState extends State<QuranSurahScreen> {
  int _selectedSurahIndex = 0;
  bool _isLooping = false;

  final List<QuranSurahItem> _surahs = [
    QuranSurahItem(
      id: 's1',
      title: 'Surah Al-Fatiha 📖',
      arabicTitle: 'الفَاتِحَة',
      englishMeaning: 'The Opening',
      verseCount: 7,
      verses: [
        QuranVerse(number: 1, arabic: 'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', transliteration: 'Bismillahir-Rahmanir-Rahim', translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'),
        QuranVerse(number: 2, arabic: 'ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ', transliteration: 'Alhamdu lillahi Rabbil-\'alamin', translation: '[All] praise is [due] to Allah, Lord of the worlds.'),
        QuranVerse(number: 3, arabic: 'ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', transliteration: 'Ar-Rahmanir-Rahim', translation: 'The Entirely Merciful, the Especially Merciful.'),
        QuranVerse(number: 4, arabic: 'مَٰلِكِ يَوْمِ ٱلدِّينِ', transliteration: 'Maliki Yawmid-Din', translation: 'Sovereign of the Day of Recompense.'),
        QuranVerse(number: 5, arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ', transliteration: 'Iyyaka na\'budu wa iyyaka nasta\'in', translation: 'It is You we worship and You we ask for help.'),
        QuranVerse(number: 6, arabic: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ', transliteration: 'Ihdinas-siratal-mustaqim', translation: 'Guide us to the straight path.'),
        QuranVerse(number: 7, arabic: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ', transliteration: 'Siratal-ladhina an\'amta \'alayhim ghayril-maghdubi \'alayhim wa lad-dallin', translation: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.'),
      ],
    ),
    QuranSurahItem(
      id: 's2',
      title: 'Surah Al-Ikhlas ⭐',
      arabicTitle: 'الإِخْلَاص',
      englishMeaning: 'Sincerity / Purity',
      verseCount: 4,
      verses: [
        QuranVerse(number: 1, arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ', transliteration: 'Qul Huwallahu Ahad', translation: 'Say, "He is Allah, [who is] One."'),
        QuranVerse(number: 2, arabic: 'اللَّهُ الصَّمَدُ', transliteration: 'Allahus-Samad', translation: 'Allah, the Eternal Refuge.'),
        QuranVerse(number: 3, arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ', transliteration: 'Lam yalid wa lam yulad', translation: 'He neither begets nor is born.'),
        QuranVerse(number: 4, arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', transliteration: 'Wa lam yakul-lahu kufuwan ahad', translation: 'Nor is there to Him any equivalent.'),
      ],
    ),
    QuranSurahItem(
      id: 's3',
      title: 'Surah Al-Falaq 🌅',
      arabicTitle: 'الفَلَق',
      englishMeaning: 'The Daybreak',
      verseCount: 5,
      verses: [
        QuranVerse(number: 1, arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ', transliteration: 'Qul a\'udhu bi Rabbil-falaq', translation: 'Say, "I seek refuge in the Lord of daybreak."'),
        QuranVerse(number: 2, arabic: 'مِن شَرِّ مَا خَلَقَ', transliteration: 'Min sharri ma khalaq', translation: 'From the evil of that which He created.'),
        QuranVerse(number: 3, arabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ', transliteration: 'Wa min sharri ghasiqin idha waqab', translation: 'And from the evil of darkness when it settles.'),
        QuranVerse(number: 4, arabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ', transliteration: 'Wa min sharrin-naffathati fil-\'uqad', translation: 'And from the evil of the blowers in knots.'),
        QuranVerse(number: 5, arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ', transliteration: 'Wa min sharri hasidin idha hasad', translation: 'And from the evil of an envier when he envies.'),
      ],
    ),
    QuranSurahItem(
      id: 's4',
      title: 'Surah An-Nas 🛡️',
      arabicTitle: 'النَّاس',
      englishMeaning: 'Mankind',
      verseCount: 6,
      verses: [
        QuranVerse(number: 1, arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ', transliteration: 'Qul a\'udhu bi Rabbin-nas', translation: 'Say, "I seek refuge in the Lord of mankind."'),
        QuranVerse(number: 2, arabic: 'مَلِكِ النَّاسِ', transliteration: 'Malikin-nas', translation: 'The Sovereign of mankind.'),
        QuranVerse(number: 3, arabic: 'إِلَٰهِ النَّاسِ', transliteration: 'Ilahin-nas', translation: 'The God of mankind.'),
        QuranVerse(number: 4, arabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ', transliteration: 'Min sharril-waswasil-khannas', translation: 'From the evil of the retreating whisperer.'),
        QuranVerse(number: 5, arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ', transliteration: 'Alladhi yuwaswisu fi sudurin-nas', translation: 'Who whispers into the breasts of mankind.'),
        QuranVerse(number: 6, arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ', transliteration: 'Minal-jinnati wan-nas', translation: 'From among the jinn and mankind.'),
      ],
    ),
    QuranSurahItem(
      id: 's5',
      title: 'Surah Al-Kawtar 🌊',
      arabicTitle: 'الكَوْثَر',
      englishMeaning: 'Abundance',
      verseCount: 3,
      verses: [
        QuranVerse(number: 1, arabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ', transliteration: 'Inna a\'taynakal-kawtar', translation: 'Indeed, We have granted you, [O Muhammad], al-Kawthar.'),
        QuranVerse(number: 2, arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ', transliteration: 'Fa salli li Rabbika wanhar', translation: 'So pray to your Lord and sacrifice [to Him alone].'),
        QuranVerse(number: 3, arabic: 'إِنَّ شَانِئَكَ هُوَ الأَبْتَرُ', transliteration: 'Inna shani\'aka huwal-abtar', translation: 'Indeed, your enemy is the one cut off.'),
      ],
    ),
  ];

  void _markAsMemorized() {
    final appState = Provider.of<AppStateProvider>(context, listen: false);
    final currentSurah = _surahs[_selectedSurahIndex];

    AudioService.instance.playVoiceFeedback(
      context,
      'Alhamdulillah! You made your family proud.',
    );

    showDialog(
      context: context,
      builder: (_) => Dialog(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text('⭐', style: TextStyle(fontSize: 48)),
              const SizedBox(height: 12),
              const Text(
                'MashaAllah! 🎉',
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: AppColors.textDark),
              ),
              const SizedBox(height: 10),
              Text(
                'Great job ${appState.activeChild.name}! You unlocked the Quran star badge for memorizing ${currentSurah.title}!',
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 14, color: AppColors.textMuted),
              ),
              const SizedBox(height: 20),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppColors.primaryTeal,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    padding: const EdgeInsets.symmetric(vertical: 12),
                  ),
                  onPressed: () => Navigator.pop(context),
                  child: const Text('Hooray! ⭐'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final currentSurah = _surahs[_selectedSurahIndex];

    return Scaffold(
      appBar: AppBar(
        title: const Text('📖 Quran for kids (male Qari)'),
        backgroundColor: Colors.transparent,
        elevation: 0,
      ),
      body: IslamicPatternBackground(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            children: [
              // Surah Selector Carousel / Tab Bar
              SizedBox(
                height: 50,
                child: ListView.builder(
                  scrollDirection: Axis.horizontal,
                  itemCount: _surahs.length,
                  itemBuilder: (context, index) {
                    final isSelected = index == _selectedSurahIndex;
                    return GestureDetector(
                      onTap: () {
                        setState(() => _selectedSurahIndex = index);
                      },
                      child: Container(
                        margin: const EdgeInsets.only(right: 10),
                        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                        decoration: BoxDecoration(
                          color: isSelected ? AppColors.primaryTeal : Colors.white,
                          borderRadius: BorderRadius.circular(20),
                          boxShadow: [
                            BoxShadow(
                              color: AppColors.primaryTeal.withOpacity(0.1),
                              blurRadius: 8,
                              offset: const Offset(0, 3),
                            ),
                          ],
                        ),
                        child: Text(
                          _surahs[index].title,
                          style: TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.bold,
                            color: isSelected ? Colors.white : AppColors.textDark,
                          ),
                        ),
                      ),
                    );
                  },
                ),
              ),
              const SizedBox(height: 20),

              // Surah Info Header Card
              Container(
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  gradient: AppColors.primaryGradient,
                  borderRadius: BorderRadius.circular(28),
                  boxShadow: [
                    BoxShadow(
                      color: AppColors.primaryTeal.withOpacity(0.3),
                      blurRadius: 15,
                      offset: const Offset(0, 6),
                    ),
                  ],
                ),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              currentSurah.title,
                              style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: Colors.white),
                            ),
                            Text(
                              'Meaning: "${currentSurah.englishMeaning}"',
                              style: const TextStyle(fontSize: 13, color: Colors.white70),
                            ),
                          ],
                        ),
                        Text(
                          currentSurah.arabicTitle,
                          style: const TextStyle(fontSize: 28, fontWeight: FontWeight.bold, color: AppColors.accentGold),
                        ),
                      ],
                    ),
                    const SizedBox(height: 16),

                    // Recitation recordings have not been added yet.
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        ElevatedButton.icon(
                          style: ElevatedButton.styleFrom(
                            backgroundColor: AppColors.accentGold,
                            padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 10),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                          ),
                          icon: const Icon(Icons.record_voice_over_rounded),
                          label: const Text('Recitation audio coming soon'),
                          onPressed: null,
                        ),
                        IconButton(
                          icon: Icon(
                            Icons.repeat_rounded,
                            color: _isLooping ? AppColors.accentGold : Colors.white70,
                            size: 28,
                          ),
                          tooltip: 'Loop Verse',
                          onPressed: () => setState(() => _isLooping = !_isLooping),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 20),

              // Bismillah Header Card
              Container(
                width: double.infinity,
                padding: const EdgeInsets.symmetric(vertical: 14, horizontal: 20),
                decoration: BoxDecoration(
                  color: AppColors.softTealBg,
                  borderRadius: BorderRadius.circular(20),
                ),
                child: const Text(
                  'بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ',
                  style: TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.bold,
                    color: AppColors.primaryTeal,
                  ),
                  textAlign: TextAlign.center,
                  textDirection: TextDirection.rtl,
                ),
              ),
              const SizedBox(height: 16),

              // Verse Breakdown List Cards
              Column(
                children: currentSurah.verses.map((verse) {
                  return Container(
                    margin: const EdgeInsets.only(bottom: 14),
                    padding: const EdgeInsets.all(18),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(24),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withOpacity(0.03),
                          blurRadius: 10,
                          offset: const Offset(0, 4),
                        ),
                      ],
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Container(
                              padding: const EdgeInsets.all(8),
                              decoration: const BoxDecoration(
                                color: AppColors.softGoldBg,
                                shape: BoxShape.circle,
                              ),
                              child: Text(
                                '۝ ${verse.number}',
                                style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: AppColors.textGold),
                              ),
                            ),
                            IconButton(
                              icon: const Icon(
                                Icons.play_circle_fill_rounded,
                                color: AppColors.textMuted,
                              ),
                              tooltip: 'Recitation audio coming soon',
                              onPressed: null,
                            ),
                          ],
                        ),
                        const SizedBox(height: 8),
                        Text(
                          verse.arabic,
                          style: const TextStyle(
                            fontSize: 26,
                            fontWeight: FontWeight.bold,
                            color: AppColors.textDark,
                            height: 1.6,
                          ),
                          textAlign: TextAlign.right,
                          textDirection: TextDirection.rtl,
                        ),
                        const SizedBox(height: 10),
                        Text(
                          verse.transliteration,
                          style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppColors.primaryTeal),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          verse.translation,
                          style: const TextStyle(fontSize: 13, color: AppColors.textMuted),
                        ),
                      ],
                    ),
                  );
                }).toList(),
              ),
              const SizedBox(height: 16),

              // Memorization Action Button
              ElevatedButton.icon(
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.mintGreen,
                  minimumSize: const Size(double.infinity, 56),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                ),
                icon: const Icon(Icons.star_rounded, size: 28),
                label: const Text('⭐ Mark Surah as Memorized! (+20 Stars)'),
                onPressed: _markAsMemorized,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
