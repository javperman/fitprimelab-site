// i18n helper library
export type Language = 'en' | 'es' | 'pt' | 'ja';

const LANGUAGES: Language[] = ['en', 'es', 'pt', 'ja'];
const DEFAULT_LANGUAGE: Language = 'en';

const LANGUAGE_NAMES: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  ja: '日本語',
};

// Navigation translations
const NAV_TRANSLATIONS: Record<Language, { tools: string; blog: string; exercises: string }> = {
  en: { tools: 'Tools', blog: 'Blog', exercises: 'Exercises' },
  es: { tools: 'Herramientas', blog: 'Blog', exercises: 'Ejercicios' },
  pt: { tools: 'Ferramentas', blog: 'Blog', exercises: 'Exercícios' },
  ja: { tools: 'ツール', blog: 'ブログ', exercises: 'エクササイズ' },
};

// Complete RM Calculator translations
const RM_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    'rm.title': 'RM Calculator',
    'rm.weight': 'Weight',
    'rm.reps': 'Reps',
    'rm.formula': 'Formula',
    'rm.calculate': 'Calculate',
    'rm.result': 'Your 1RM',
    'rm.history': 'Show History',
    'rm.clearHistory': 'Clear History',
    'rm.kg': 'kg',
    'rm.lbs': 'lbs',
    'rm.hybrid': 'Hybrid (Recommended)',
    'rm.epley': 'Epley',
    'rm.brzycki': 'Brzycki',
    'rm.lombardi': 'Lombardi',
    'rm.valueSeemHigh': 'This value seems unusually high for the given weight',
    'rm.valueSeemLow': 'This value seems unusually low for the given reps',
    'rm.enterValidValues': 'Please enter valid weight and reps',
    'rm.whatIs': 'What is 1RM?',
    'rm.whatIsDesc': 'One Rep Max (1RM) is the maximum amount of weight you can lift for a single repetition of a given exercise. It\'s a fundamental metric in strength training that helps you measure your progress and design effective workout programs. Understanding your 1RM is crucial for setting appropriate training loads and preventing injuries.',
    'rm.howToCalculate': 'How to Calculate 1RM',
    'rm.howToCalculateDesc': 'While the gold standard for determining your 1RM is to actually attempt a single maximum lift, this method carries injury risk. Instead, most lifters use mathematical formulas that estimate 1RM based on the weight lifted for multiple repetitions. These formulas have been scientifically validated and provide accurate estimates when you use a weight you can lift for 2-10 repetitions. The Hybrid formula combines the three most popular methods for maximum accuracy.',
    'rm.formulas': 'Formulas Explained',
    'rm.formulasDesc': 'There are several proven formulas for estimating 1RM. Each was developed through research and has specific strengths:',
    'rm.epleyFormula': 'Epley Formula',
    'rm.epleyDesc': 'Formula: 1RM = Weight × (1 + Reps / 30) | Best for: 1-10 reps. Popular and widely used in gyms. Works well for heavier loads with lower reps.',
    'rm.brzickiFormula': 'Brzycki Formula',
    'rm.brzickiDesc': 'Formula: 1RM = Weight / (1.0278 - 0.0278 × Reps) | Best for: 1-15 reps. Accurate across a wider range of rep ranges. Often considered the most reliable for moderate rep ranges.',
    'rm.lombardiFormula': 'Lombardi Formula',
    'rm.lombardiDesc': 'Formula: 1RM = Weight × Reps^0.1 | Best for: balanced approach. Simpler calculation, works well for most rep ranges.',
    'rm.hybridFormula': 'Hybrid Formula (Recommended)',
    'rm.hybridDesc': 'Combines Brzycki (50%), Epley (35%), and Lombardi (15%) for the most accurate estimate. This weighting gives priority to Brzycki\'s proven accuracy while incorporating the strengths of other formulas.',
    'rm.faq': 'Frequently Asked Questions',
    'rm.faqQ1': 'How accurate is the 1RM calculator?',
    'rm.faqA1': 'The calculator provides estimates, not exact values. Accuracy depends on your form, experience level, and how close the weight is to your actual 1RM. Generally, estimates are within 5-10% of your actual max.',
    'rm.faqQ2': 'What rep range should I use for most accurate results?',
    'rm.faqA2': 'For best accuracy, use weights you can lift for 2-10 repetitions. The Hybrid formula works across a range of 1-15 reps, but accuracy decreases with very high rep counts.',
    'rm.faqQ3': 'Is it safe to test my actual 1RM?',
    'rm.faqA3': 'Testing your actual 1RM can be done safely with proper form, spot assistance, and appropriate warm-up. However, using the calculator with submaximal weights is a lower-risk alternative for establishing training loads.',
    'rm.faqQ4': 'What should I do with my calculated 1RM?',
    'rm.faqA4': 'Use it to determine your training percentages for different rep ranges, compare progress over time, and set goals. For most training programs, work with 60-85% of your calculated 1RM.',
    'rm.faqQ5': 'How often should I recalculate my 1RM?',
    'rm.faqA5': 'Recalculate every 4-8 weeks if you\'re actively training. More frequent testing can help track progress, but too frequent testing wastes recovery.',
    'rm.related': 'Related Articles',
    'rm.relatedTools': 'Related Tools',
    'rm.practical': 'Why Calculate Your 1RM?',
    'rm.practicalContext': 'This 1RM calculator is built for strength athletes — powerlifters, general gym lifters, CrossFitters and intermediate trainees. In one click it gives you (1) accurate training-load percentages from 50% to 100% of your max, (2) a single number to track progress between sessions, and (3) a sanity check for goal-setting. If you are an absolute beginner, master technique first — then come back to dial in your loads.',
    'rm.whenUseTitle': 'When to Use Each Formula',
    'rm.epleyWhen': 'Best for lower rep ranges (1–5 reps). Most popular in classic gym settings.',
    'rm.brzickiWhen': 'Best for moderate rep ranges (6–10 reps). Often considered the most reliable and versatile.',
    'rm.lombardiWhen': 'Balanced approach working across most rep ranges.',
    'rm.hybridWhen': 'Best overall—combines the strengths of all three formulas with dynamic weighting that adapts to your rep range.',
    'rm.hybridWeighting': 'The Hybrid formula uses dynamic weighting: it automatically adjusts which formula contributes most based on your reps. For low reps (1-5), it emphasizes Epley. For medium reps (6-10), it emphasizes Brzycki. This ensures the most accurate estimate for any rep range.',
    'rm.precisionWarning': '⚠️ Accuracy limitation: Estimates become less precise if reps exceed 10–12 or if you don\'t perform the lift close to failure.',
    'rm.tableTitle': '1RM Training Percentages',
    'rm.tablePercent': '% 1RM',
    'rm.tableWeight': 'Weight',
    'rm.tableReps': 'Target Reps',
  },
  es: {
    'rm.title': 'Calculadora RM',
    'rm.weight': 'Peso',
    'rm.reps': 'Repeticiones',
    'rm.formula': 'Fórmula',
    'rm.calculate': 'Calcular',
    'rm.result': 'Tu 1RM',
    'rm.history': 'Ver Historial',
    'rm.clearHistory': 'Limpiar Historial',
    'rm.kg': 'kg',
    'rm.lbs': 'lbs',
    'rm.hybrid': 'Híbrido (Recomendado)',
    'rm.epley': 'Epley',
    'rm.brzycki': 'Brzycki',
    'rm.lombardi': 'Lombardi',
    'rm.valueSeemHigh': 'Este valor parece inusualmente alto para el peso dado',
    'rm.valueSeemLow': 'Este valor parece inusualmente bajo para las reps dadas',
    'rm.enterValidValues': 'Ingresa valores válidos de peso y reps',
    'rm.whatIs': '¿Qué es 1RM?',
    'rm.whatIsDesc': 'La Repetición Máxima (1RM) es la cantidad máxima de peso que puedes levantar en una sola repetición de un ejercicio dado. Es una métrica fundamental en el entrenamiento de fuerza que te ayuda a medir tu progreso y diseñar programas de entrenamiento efectivos. Entender tu 1RM es crucial para establecer cargas de entrenamiento apropiadas y prevenir lesiones.',
    'rm.howToCalculate': 'Cómo Calcular 1RM',
    'rm.howToCalculateDesc': 'Si bien el método de oro para determinar tu 1RM es intentar un levantamiento máximo único, este método conlleva riesgo de lesión. En su lugar, la mayoría de levantadores usan fórmulas matemáticas que estiman 1RM basadas en el peso levantado para múltiples repeticiones. Estas fórmulas han sido validadas científicamente y proporcionan estimaciones precisas cuando usas un peso que puedes levantar para 2-10 repeticiones. La fórmula Híbrida combina los tres métodos más populares para máxima precisión.',
    'rm.formulas': 'Fórmulas Explicadas',
    'rm.formulasDesc': 'Hay varias fórmulas comprobadas para estimar 1RM. Cada una fue desarrollada mediante investigación y tiene fortalezas específicas:',
    'rm.epleyFormula': 'Fórmula Epley',
    'rm.epleyDesc': 'Fórmula: 1RM = Peso × (1 + Reps / 30) | Mejor para: 1-10 reps. Popular y ampliamente utilizada en gimnasios. Funciona bien para cargas más pesadas con menos reps.',
    'rm.brzickiFormula': 'Fórmula Brzycki',
    'rm.brzickiDesc': 'Fórmula: 1RM = Peso / (1.0278 - 0.0278 × Reps) | Mejor para: 1-15 reps. Precisa en un rango más amplio de reps. A menudo considerada la más confiable para rangos moderados.',
    'rm.lombardiFormula': 'Fórmula Lombardi',
    'rm.lombardiDesc': 'Fórmula: 1RM = Peso × Reps^0.1 | Mejor para: enfoque equilibrado. Cálculo más simple, funciona bien para la mayoría de rangos de reps.',
    'rm.hybridFormula': 'Fórmula Híbrida (Recomendada)',
    'rm.hybridDesc': 'Combina Brzycki (50%), Epley (35%) y Lombardi (15%) para la estimación más precisa. Esta ponderación da prioridad a la precisión comprobada de Brzycki mientras incorpora las fortalezas de otras fórmulas.',
    'rm.faq': 'Preguntas Frecuentes',
    'rm.faqQ1': '¿Cuán precisa es la calculadora de 1RM?',
    'rm.faqA1': 'La calculadora proporciona estimaciones, no valores exactos. La precisión depende de tu forma, nivel de experiencia y qué tan cerca esté el peso de tu máximo real. Generalmente, las estimaciones están dentro del 5-10% de tu máximo real.',
    'rm.faqQ2': '¿Qué rango de reps debo usar para resultados más precisos?',
    'rm.faqA2': 'Para mejor precisión, usa pesos que puedas levantar para 2-10 repeticiones. La fórmula Híbrida funciona en un rango de 1-15 reps, pero la precisión disminuye con conteos de reps muy altos.',
    'rm.faqQ3': '¿Es seguro probar mi 1RM real?',
    'rm.faqA3': 'Probar tu 1RM real puede hacerse de forma segura con forma apropiada, asistencia de un compañero y calentamiento adecuado. Sin embargo, usar la calculadora con pesos submáximos es una alternativa de menor riesgo para establecer cargas de entrenamiento.',
    'rm.faqQ4': '¿Qué debo hacer con mi 1RM calculado?',
    'rm.faqA4': 'Úsalo para determinar tus porcentajes de entrenamiento para diferentes rangos de reps, comparar progreso con el tiempo y establecer metas. Para la mayoría de programas de entrenamiento, trabaja con 60-85% de tu 1RM calculado.',
    'rm.faqQ5': '¿Con qué frecuencia debo recalcular mi 1RM?',
    'rm.faqA5': 'Recalcula cada 4-8 semanas si estás entrenando activamente. Las pruebas más frecuentes pueden ayudar a rastrear el progreso, pero hacer pruebas demasiado frecuentes desperdicia recuperación.',
    'rm.related': 'Artículos Relacionados',
    'rm.relatedTools': 'Herramientas Relacionadas',
    'rm.practical': '¿Por Qué Calcular tu 1RM?',
    'rm.practicalContext': 'Esta calculadora de 1RM está pensada para deportistas de fuerza — powerlifters, gimnasio general, CrossFit y atletas intermedios. En un clic obtienes (1) porcentajes de carga precisos del 50% al 100% de tu máximo, (2) un único número para rastrear el progreso entre sesiones, y (3) un sanity check para fijar objetivos. Si eres principiante absoluto, domina la técnica primero — después vuelves para ajustar las cargas.',
    'rm.whenUseTitle': 'Cuándo Usar Cada Fórmula',
    'rm.epleyWhen': 'Mejor para rangos bajos de reps (1–5 reps). Más popular en gimnasios tradicionales.',
    'rm.brzickiWhen': 'Mejor para rangos moderados de reps (6–10 reps). Frecuentemente considerada la más confiable y versátil.',
    'rm.lombardiWhen': 'Enfoque equilibrado que funciona en la mayoría de rangos de reps.',
    'rm.hybridWhen': 'Mejor en general—combina las fortalezas de las tres fórmulas con ponderación dinámica que se adapta a tu rango de reps.',
    'rm.hybridWeighting': 'La fórmula Híbrida usa ponderación dinámica: ajusta automáticamente cuál fórmula contribuye más basándose en tus reps. Para reps bajas (1-5), enfatiza Epley. Para reps medias (6-10), enfatiza Brzycki. Esto asegura la estimación más precisa para cualquier rango de reps.',
    'rm.precisionWarning': '⚠️ Limitación de precisión: Las estimaciones se vuelven menos precisas si las reps exceden 10–12 o si no realizas el levantamiento cerca del fallo.',
    'rm.tableTitle': 'Porcentajes de Entrenamiento 1RM',
    'rm.tablePercent': '% 1RM',
    'rm.tableWeight': 'Peso',
    'rm.tableReps': 'Reps Objetivo',
  },
  pt: {
    'rm.title': 'Calculadora RM',
    'rm.weight': 'Peso',
    'rm.reps': 'Repetições',
    'rm.formula': 'Fórmula',
    'rm.calculate': 'Calcular',
    'rm.result': 'Seu 1RM',
    'rm.history': 'Ver Histórico',
    'rm.clearHistory': 'Limpar Histórico',
    'rm.kg': 'kg',
    'rm.lbs': 'lbs',
    'rm.hybrid': 'Híbrido (Recomendado)',
    'rm.epley': 'Epley',
    'rm.brzycki': 'Brzycki',
    'rm.lombardi': 'Lombardi',
    'rm.valueSeemHigh': 'Este valor parece muito alto para o peso inserido',
    'rm.valueSeemLow': 'Este valor parece muito baixo para as repetições inseridas',
    'rm.enterValidValues': 'Insira valores válidos de peso e reps',
    'rm.whatIs': 'O que é 1RM?',
    'rm.whatIsDesc': 'Repetição Máxima (1RM) é a quantidade máxima de peso que você pode levantar em uma única repetição de um exercício. É uma métrica fundamental no treinamento de força que ajuda você a medir seu progresso e projetar programas de treinamento eficazes. Entender seu 1RM é crucial para definir cargas de treinamento apropriadas e prevenir lesões.',
    'rm.howToCalculate': 'Como Calcular 1RM',
    'rm.howToCalculateDesc': 'Embora o padrão ouro para determinar seu 1RM seja tentar um levantamento máximo único, este método carrega risco de lesão. Em vez disso, a maioria dos levantadores usa fórmulas matemáticas que estimam 1RM com base no peso levantado para múltiplas repetições. Essas fórmulas foram validadas cientificamente e fornecem estimativas precisas quando você usa um peso que pode levantar por 2-10 repetições. A fórmula Híbrida combina os três métodos mais populares para máxima precisão.',
    'rm.formulas': 'Fórmulas Explicadas',
    'rm.formulasDesc': 'Existem várias fórmulas comprovadas para estimar 1RM. Cada uma foi desenvolvida por meio de pesquisa e tem pontos fortes específicos:',
    'rm.epleyFormula': 'Fórmula Epley',
    'rm.epleyDesc': 'Fórmula: 1RM = Peso × (1 + Reps / 30) | Melhor para: 1-10 reps. Popular e amplamente utilizada em academias. Funciona bem para cargas mais pesadas com reps mais baixas.',
    'rm.brzickiFormula': 'Fórmula Brzycki',
    'rm.brzickiDesc': 'Fórmula: 1RM = Peso / (1.0278 - 0.0278 × Reps) | Melhor para: 1-15 reps. Precisa em uma faixa mais ampla de reps. Frequentemente considerada a mais confiável para faixas moderadas.',
    'rm.lombardiFormula': 'Fórmula Lombardi',
    'rm.lombardiDesc': 'Fórmula: 1RM = Peso × Reps^0.1 | Melhor para: abordagem equilibrada. Cálculo mais simples, funciona bem para a maioria das faixas de reps.',
    'rm.hybridFormula': 'Fórmula Híbrida (Recomendada)',
    'rm.hybridDesc': 'Combina Brzycki (50%), Epley (35%) e Lombardi (15%) para a estimativa mais precisa. Este peso dá prioridade à precisão comprovada de Brzycki enquanto incorpora os pontos fortes de outras fórmulas.',
    'rm.faq': 'Perguntas Frequentes',
    'rm.faqQ1': 'Quão precisa é a calculadora de 1RM?',
    'rm.faqA1': 'A calculadora fornece estimativas, não valores exatos. A precisão depende de sua forma, nível de experiência e o quão próximo o peso está de seu máximo real. Geralmente, as estimativas estão dentro de 5-10% de seu máximo real.',
    'rm.faqQ2': 'Que faixa de reps devo usar para resultados mais precisos?',
    'rm.faqA2': 'Para melhor precisão, use pesos que você possa levantar por 2-10 repetições. A fórmula Híbrida funciona em uma faixa de 1-15 reps, mas a precisão diminui com contagens de reps muito altas.',
    'rm.faqQ3': 'É seguro testar meu 1RM real?',
    'rm.faqA3': 'Testar seu 1RM real pode ser feito com segurança com forma apropriada, assistência de um parceiro e aquecimento adequado. No entanto, usar a calculadora com pesos submáximos é uma alternativa de menor risco para estabelecer cargas de treinamento.',
    'rm.faqQ4': 'O que devo fazer com meu 1RM calculado?',
    'rm.faqA4': 'Use-o para determinar seus percentuais de treinamento para diferentes faixas de reps, comparar progresso ao longo do tempo e definir metas. Para a maioria dos programas de treinamento, trabalhe com 60-85% de seu 1RM calculado.',
    'rm.faqQ5': 'Com que frequência devo recalcular meu 1RM?',
    'rm.faqA5': 'Recalcule a cada 4-8 semanas se estiver treinando ativamente. Testes mais frequentes podem ajudar a rastrear o progresso, mas testes muito frequentes desperdiçam recuperação.',
    'rm.related': 'Artigos Relacionados',
    'rm.relatedTools': 'Ferramentas Relacionadas',
    'rm.practical': 'Por Que Calcular Seu 1RM?',
    'rm.practicalContext': 'Esta calculadora de 1RM foi pensada para atletas de força — powerlifters, frequentadores de academia, CrossFitters e atletas intermediários. Em um clique você tem (1) percentuais de carga precisos de 50% a 100% do seu máximo, (2) um número único para acompanhar o progresso entre sessões, e (3) uma referência para definir metas. Se você é iniciante absoluto, domine a técnica primeiro — depois volte para ajustar as cargas.',
    'rm.whenUseTitle': 'Quando Usar Cada Fórmula',
    'rm.epleyWhen': 'Melhor para faixas baixas de repetições (1–5 reps). Mais popular em academias tradicionais.',
    'rm.brzickiWhen': 'Melhor para faixas moderadas de repetições (6–10 reps). Frequentemente considerada a mais confiável e versátil.',
    'rm.lombardiWhen': 'Abordagem equilibrada que funciona na maioria das faixas de repetições.',
    'rm.hybridWhen': 'Melhor no geral—combina os pontos fortes das três fórmulas com ponderação dinâmica que se adapta à sua faixa de reps.',
    'rm.hybridWeighting': 'A fórmula Híbrida usa ponderação dinâmica: ajusta automaticamente qual fórmula contribui mais com base em suas repetições. Para repetições baixas (1-5), enfatiza Epley. Para reps médias (6-10), enfatiza Brzycki. Isso garante a estimativa mais precisa para qualquer faixa de repetições.',
    'rm.precisionWarning': '⚠️ Limitação de precisão: As estimativas ficam menos precisas se as repetições excederem 10–12 ou se você não executar o levantamento próximo da falha.',
    'rm.tableTitle': 'Percentuais de Treinamento 1RM',
    'rm.tablePercent': '% 1RM',
    'rm.tableWeight': 'Peso',
    'rm.tableReps': 'Reps Alvo',
  },
  ja: {
    'rm.title': '1RM計算機',
    'rm.weight': 'ウェイト',
    'rm.reps': 'レップス',
    'rm.formula': '公式',
    'rm.calculate': '計算',
    'rm.result': 'あなたの1RM',
    'rm.history': '履歴を表示',
    'rm.clearHistory': '履歴をクリア',
    'rm.kg': 'kg',
    'rm.lbs': 'lbs',
    'rm.hybrid': 'ハイブリッド（推奨）',
    'rm.epley': 'エプレー法',
    'rm.brzycki': 'ブジスキ法',
    'rm.lombardi': 'ロンバルディ法',
    'rm.valueSeemHigh': 'このウェイトの値は異常に高いようにみえます',
    'rm.valueSeemLow': 'このレップス数には異常に低いようにみえます',
    'rm.enterValidValues': '有効なウェイトとレップスを入力してください',
    'rm.whatIs': '1RMとは何ですか？',
    'rm.whatIsDesc': '最大挙上重量（1RM）は、特定の種目で1回だけ挙上できる最大重量です。筋力トレーニングにおいて進捗を数値で測定し、効果的なプログラムを設計するための基本指標であり、適切なトレーニング負荷を選び、怪我を防ぐ上で欠かせません。',
    'rm.howToCalculate': '1RMの計算方法',
    'rm.howToCalculateDesc': '1RMを決定するゴールドスタンダードは実際に最大挙上を試みることですが、この方法はケガのリスクを伴います。代わりに、ほとんどのリフターは、複数回の反復で持ち上げられた重量に基づいて1RMを推定する数学的公式を使用します。これらの公式は科学的に検証されており、2〜10回の反復を持ち上げられる重量を使用する場合、正確な推定値を提供します。ハイブリッド公式は、最大の精度のために最も一般的な3つの方法を組み合わせています。',
    'rm.formulas': '公式の説明',
    'rm.formulasDesc': '1RMを推定するためのいくつかの実証されている公式があります。それぞれは研究を通じて開発され、特定の強みを持っています。',
    'rm.epleyFormula': 'エプレー法',
    'rm.epleyDesc': '公式：1RM = ウェイト × (1 + レップス / 30) | 最適：1-10 reps。ジムで人気があり広く使用されています。より低いレップスでより重い負荷に適しています。',
    'rm.brzickiFormula': 'ブジスキ法',
    'rm.brzickiDesc': '公式：1RM = ウェイト / (1.0278 - 0.0278 × レップス) | 最適：1-15 reps。より広い範囲のレップスで正確です。中程度のレップス範囲で最も信頼できると考えられることがよくあります。',
    'rm.lombardiFormula': 'ロンバルディ法',
    'rm.lombardiDesc': '公式：1RM = ウェイト × レップス^0.1 | 最適：バランスの取れたアプローチ。より簡単な計算で、ほとんどのレップス範囲で機能します。',
    'rm.hybridFormula': 'ハイブリッド公式（推奨）',
    'rm.hybridDesc': 'ブジスキ（50％）、エプレー法（35％）、ロンバルディ法（15％）を組み合わせて、最も正確な推定値を得ます。この重み付けは、ブジスキの実証済みの精度に優先順位を付けながら、他の公式の強みを組み込んでいます。',
    'rm.faq': 'よくある質問',
    'rm.faqQ1': '1RM計算機はどのくらい正確ですか？',
    'rm.faqA1': '計算機は推定値を提供し、正確な値ではありません。精度は、あなたのフォーム、経験レベル、ウェイトが実際の最大値にどれだけ近いかに依存します。通常、推定値は実際の最大値の5～10％以内です。',
    'rm.faqQ2': 'より正確な結果のためにどのレップス範囲を使用すべきですか？',
    'rm.faqA2': '最良の精度のために、2～10回の反復を持ち上げられるウェイトを使用してください。ハイブリッド公式は1～15のレップス範囲で機能しますが、非常に高いレップス数では精度が低下します。',
    'rm.faqQ3': '実際の1RMをテストするのは安全ですか？',
    'rm.faqA3': '適切なフォーム、パートナーからのサポート、適切なウォームアップにより、実際の1RMのテストは安全に実行できます。ただし、計算機をサブマックスウェイトで使用することは、トレーニング負荷を確立するためのリスクが低い代替案です。',
    'rm.faqQ4': '計算された1RMでどうすればよいですか？',
    'rm.faqA4': '各レップ数帯の目標重量を設定し、トレーニングの進捗を継続的に記録・比較するための基準として活用してください。ほとんどのプログラムでは、算出した1RMの60〜85%の範囲でトレーニングするのが一般的です。',
    'rm.faqQ5': '1RMはどのくらいの頻度で再計算すべきですか？',
    'rm.faqA5': 'アクティブにトレーニングしている場合は、4～8週間ごとに再計算してください。より頻繁なテストは進捗を追跡するのに役立ちますが、テストが頻繁すぎると回復が無駄になります。',
    'rm.related': '関連記事',
    'rm.relatedTools': '関連ツール',
    'rm.practical': 'なぜ1RMを計算するのか？',
    'rm.practicalContext': '筋力系トレーニング（パワーリフティング、ジム、クロスフィットなど）に取り組んでいる方に最適です。1RM計算機は、適切なトレーニング負荷の決定、進捗の数値化、目標設定の3点を一度に解決します。完全な初心者の場合は、まず正しいフォームの習得を優先し、その後で1RMの計算に進みましょう。',
    'rm.whenUseTitle': '各公式を使用する場合',
    'rm.epleyWhen': '低いレップス範囲（1–5 reps）に最適です。古典的なジム設定で最も人気があります。',
    'rm.brzickiWhen': '中程度のレップス範囲（6–10 reps）に最適です。汎用性が高く、最も信頼性のある公式とされることが多い方式です。',
    'rm.lombardiWhen': 'ほとんどのレップス範囲で機能するバランスの取れたアプローチ。',
    'rm.hybridWhen': '全体的に最適—3つの公式の強みすべてを組み合わせ、レップス範囲に適応する動的重み付けを備えています。',
    'rm.hybridWeighting': 'ハイブリッド公式は動的重み付けを使用します。レップスに基づいて、どの公式が最も貢献するかを自動的に調整します。低いレップス（1-5）の場合、Epley法を強調します。中程度のレップス（6-10）の場合、Brzycki法を強調します。これにより、任意のレップス範囲で最も正確な推定値が保証されます。',
    'rm.precisionWarning': '⚠️ 精度の制限：レップ数が10〜12を超える場合や、限界近くまで挙上していないセットでは、推定値の精度が大きく低下します。',
    'rm.tableTitle': '1RMトレーニングパーセンテージ',
    'rm.tablePercent': '% 1RM',
    'rm.tableWeight': 'ウェイト',
    'rm.tableReps': 'ターゲットレップス',
  }
};

// Get navigation translations
export function getNavTranslations(lang: Language) {
  return NAV_TRANSLATIONS[lang] || NAV_TRANSLATIONS.en;
}

// Get translations object
export function useTranslations(lang: Language) {
  return (key: string): string => {
    const translations = RM_TRANSLATIONS[lang] || RM_TRANSLATIONS.en;
    return translations[key] || key;
  };
}

// RM-specific translation helper
export function getRMTranslation(key: string, lang: Language): string {
  const translations = RM_TRANSLATIONS[lang] || RM_TRANSLATIONS.en;
  return translations[key] || key;
}

// Get all RM translations for a language
export function getAllRMTranslations(lang: Language): Record<string, string> {
  return RM_TRANSLATIONS[lang] || RM_TRANSLATIONS.en;
}

// Get language name
export function getLanguageName(lang: Language): string {
  return LANGUAGE_NAMES[lang] || 'Unknown';
}

// Check if language is valid
export function isValidLanguage(lang: string): lang is Language {
  return LANGUAGES.includes(lang as Language);
}

// Get all languages
export function getAllLanguages(): Language[] {
  return [...LANGUAGES];
}

// Get default language
export function getDefaultLanguage(): Language {
  return DEFAULT_LANGUAGE;
}

// Build URL for specific language
export function buildLangUrl(path: string, lang: Language): string {
  if (path === '/') return `/${lang}/`;
  return `/${lang}${path}`;
}

// Get alternate URLs for all languages
export function getAlternateUrls(
  baseUrl: string,
  relativePath: string,
  translations: Record<Language, string>
): Record<Language, string> {
  const urls: Record<Language, string> = {} as Record<Language, string>;
  
  for (const lang of LANGUAGES) {
    const slug = translations[lang];
    urls[lang] = `${baseUrl}/${lang}${relativePath.replace('[slug]', slug)}`;
  }
  
  return urls;
}

// Get available languages based on content
export async function getAvailableLanguages(): Promise<Language[]> {
  const availableLangs: Language[] = [];
  
  try {
    // Check which language folders exist in blog content
    const blogModules = import.meta.glob('/src/content/blog/*/*.mdx');
    
    for (const lang of LANGUAGES) {
      // Check if language has any blog posts
      const hasContent = Object.keys(blogModules).some(key => 
        key.includes(`/src/content/blog/${lang}/`)
      );
      if (hasContent) {
        availableLangs.push(lang);
      }
    }
    
    // If no languages found (e.g., during build), return default
    return availableLangs.length > 0 ? availableLangs : [DEFAULT_LANGUAGE];
  } catch {
    // Fallback to all languages if detection fails
    return LANGUAGES;
  }
}
