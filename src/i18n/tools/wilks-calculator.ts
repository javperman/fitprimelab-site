import type { Language } from '@/lib/i18n';

export interface WilksToolI18n {
  h1: string;
  subtitle: string;
  sex: string;
  male: string;
  female: string;
  unit: string;
  bodyweight: string;
  modeByLift: string;
  modeTotal: string;
  squat: string;
  bench: string;
  deadlift: string;
  total: string;
  autoTotal: string;
  calculate: string;
  clear: string;
  resultTitle: string;
  wilksScore: string;
  ipfGl: string;
  classification: string;
  copyResult: string;
  copied: string;
  errorRequired: string;
  errorPositive: string;
  classUntrained: string;
  classBeginner: string;
  classIntermediate: string;
  classAdvanced: string;
  classElite: string;
  classWorldClass: string;
  tableTitle: string;
  linksTitle: string;
  toFfmi: string;
  toTools: string;
  faqTitle: string;
  faq1q: string;
  faq1a: string;
  faq2q: string;
  faq2a: string;
  faq3q: string;
  faq3a: string;
  faq4q: string;
  faq4a: string;
  faq5q: string;
  faq5a: string;
}

export const wilksCalculatorI18n: Record<Language, WilksToolI18n> = {
  en: {
    h1: 'Wilks Calculator',
    subtitle: 'Calculate your Wilks score (2017 coefficients) and IPF GL points from squat, bench and deadlift. The fairest way to compare powerlifting strength across bodyweight classes and between male and female lifters.',
    sex: 'Sex',
    male: 'Male',
    female: 'Female',
    unit: 'Unit',
    bodyweight: 'Bodyweight',
    modeByLift: 'By lift',
    modeTotal: 'Total only',
    squat: 'Squat',
    bench: 'Bench press',
    deadlift: 'Deadlift',
    total: 'Total',
    autoTotal: 'Auto-sum from squat + bench + deadlift if provided',
    calculate: 'Calculate Wilks',
    clear: 'Clear',
    resultTitle: 'Your strength score',
    wilksScore: 'Wilks score',
    ipfGl: 'IPF GL points',
    classification: 'Classification',
    copyResult: 'Copy result',
    copied: 'Copied',
    errorRequired: 'Bodyweight and total (or all three lifts) are required.',
    errorPositive: 'Values must be greater than zero.',
    classUntrained: 'Untrained',
    classBeginner: 'Beginner',
    classIntermediate: 'Intermediate',
    classAdvanced: 'Advanced',
    classElite: 'Elite',
    classWorldClass: 'World class',
    tableTitle: 'Wilks classification thresholds',
    linksTitle: 'See also',
    toFfmi: 'FFMI Calculator',
    toTools: 'All tools',
    faqTitle: 'FAQ',
    faq1q: 'What is a Wilks score and what is it used for?',
    faq1a: 'Wilks is a coefficient-based formula that normalizes a powerlifter\'s total (squat + bench + deadlift) against their bodyweight, producing a single score that lets you compare a 60 kg lifter and a 110 kg lifter on a level playing field. It has been the de facto standard for powerlifting "best lifter" awards since 1994 and is still used in many local meets and gym leaderboards today.',
    faq2q: 'Why also show IPF GL points?',
    faq2a: 'The IPF GL Points system was adopted by the International Powerlifting Federation in 2020 to replace Wilks at IPF-sanctioned meets. It uses different coefficients, slightly favors lighter lifters compared with old Wilks, and is what you will see at any modern IPF event. Showing both lets you read your number against whichever standard your federation or local meet uses.',
    faq3q: 'Should I enter the total manually or fill in each lift?',
    faq3a: 'If you already have an official meet total, enter it directly — that is the most accurate input. Otherwise, fill squat, bench and deadlift and the calculator auto-sums them. The two approaches give the same Wilks score; the per-lift mode is useful when you want to see how a hypothetical change in any one lift would shift your score.',
    faq4q: 'Which Wilks coefficients does this calculator use, old or new?',
    faq4a: 'This calculator uses the 2017 (revised) Wilks coefficients, which are the current standard most lifters and federations refer to when they say "Wilks." The original 1994 coefficients are slightly different and are mostly deprecated outside historical comparisons. If you are pulling old results from pre-2017 records, expect a small spread when comparing.',
    faq5q: 'How do I interpret a Wilks score in absolute terms?',
    faq5a: 'A Wilks score around 300 typically marks an intermediate raw lifter, 400 is solid advanced, 450+ is competitive at a strong national level, and 500+ is elite/world-class territory. Female lifters reach the same Wilks bands at lower absolute totals because the coefficients account for sex-based bodyweight-to-strength differences.'
  },
  es: {
    h1: 'Calculadora Wilks',
    subtitle: 'Calcula tu puntaje Wilks (coeficientes 2017) y puntos IPF GL a partir de sentadilla, banca y peso muerto. La forma más justa de comparar fuerza en powerlifting entre categorías de peso y entre hombres y mujeres.',
    sex: 'Sexo',
    male: 'Hombre',
    female: 'Mujer',
    unit: 'Unidad',
    bodyweight: 'Peso corporal',
    modeByLift: 'Por levantamiento',
    modeTotal: 'Solo total',
    squat: 'Sentadilla',
    bench: 'Press banca',
    deadlift: 'Peso muerto',
    total: 'Total',
    autoTotal: 'Suma automática de sentadilla + banca + peso muerto si están presentes',
    calculate: 'Calcular Wilks',
    clear: 'Limpiar',
    resultTitle: 'Tu puntaje de fuerza',
    wilksScore: 'Puntaje Wilks',
    ipfGl: 'Puntos IPF GL',
    classification: 'Clasificación',
    copyResult: 'Copiar resultado',
    copied: 'Copiado',
    errorRequired: 'Peso corporal y total (o los 3 levantamientos) son obligatorios.',
    errorPositive: 'Los valores deben ser mayores que cero.',
    classUntrained: 'Sin entrenar',
    classBeginner: 'Principiante',
    classIntermediate: 'Intermedio',
    classAdvanced: 'Avanzado',
    classElite: 'Élite',
    classWorldClass: 'Clase mundial',
    tableTitle: 'Umbrales de clasificación Wilks',
    linksTitle: 'Ver también',
    toFfmi: 'Calculadora FFMI',
    toTools: 'Todas las herramientas',
    faqTitle: 'Preguntas frecuentes',
    faq1q: '¿Qué es el puntaje Wilks y para qué se usa?',
    faq1a: 'Wilks es una fórmula basada en coeficientes que normaliza el total de powerlifting (sentadilla + banca + peso muerto) según el peso corporal, dando un único número que permite comparar a un atleta de 60 kg con uno de 110 kg en igualdad de condiciones. Ha sido el estándar de facto para premios de "mejor levantador" desde 1994 y se sigue usando en muchas federaciones y rankings de gimnasio.',
    faq2q: '¿Por qué mostrar también puntos IPF GL?',
    faq2a: 'El sistema IPF GL Points fue adoptado por la International Powerlifting Federation en 2020 para reemplazar a Wilks en competiciones IPF. Usa coeficientes distintos, favorece ligeramente a categorías más ligeras frente al Wilks antiguo, y es lo que verás en cualquier evento IPF moderno. Mostrar ambos te permite leer tu marca contra el estándar que use tu federación o competición local.',
    faq3q: '¿Debo introducir el total manualmente o lift por lift?',
    faq3a: 'Si ya tienes el total oficial de competición, introdúcelo directo — es la entrada más precisa. Si no, rellena sentadilla, banca y peso muerto y la calculadora suma automáticamente. Ambos métodos dan el mismo puntaje Wilks; el modo por lift es útil para ver cómo cambiaría tu marca al subir un movimiento concreto.',
    faq4q: '¿Qué coeficientes Wilks usa esta calculadora?',
    faq4a: 'Esta calculadora usa los coeficientes Wilks revisados de 2017, que son el estándar actual al que la mayoría se refiere cuando dice "Wilks". Los coeficientes originales de 1994 son ligeramente distintos y están en desuso fuera de comparaciones históricas. Si comparas marcas anteriores a 2017, espera una pequeña diferencia entre versiones.',
    faq5q: '¿Cómo interpreto mi puntaje Wilks en términos absolutos?',
    faq5a: 'Un Wilks alrededor de 300 marca a un atleta raw intermedio, 400 es avanzado sólido, 450+ es competitivo a nivel nacional fuerte, y 500+ entra en territorio élite/clase mundial. Las mujeres alcanzan los mismos rangos Wilks con totales absolutos menores porque los coeficientes ya incluyen las diferencias de fuerza-por-peso entre sexos.'
  },
  pt: {
    h1: 'Calculadora Wilks',
    subtitle: 'Calcule sua pontuação Wilks (coeficientes 2017) e pontos IPF GL a partir de agachamento, supino e terra. A forma mais justa de comparar força no powerlifting entre categorias de peso e entre homens e mulheres.',
    sex: 'Sexo',
    male: 'Homem',
    female: 'Mulher',
    unit: 'Unidade',
    bodyweight: 'Peso corporal',
    modeByLift: 'Por levantamento',
    modeTotal: 'Apenas total',
    squat: 'Agachamento',
    bench: 'Supino',
    deadlift: 'Levantamento terra',
    total: 'Total',
    autoTotal: 'Soma automática de agachamento + supino + terra se fornecidos',
    calculate: 'Calcular Wilks',
    clear: 'Limpar',
    resultTitle: 'Sua pontuação de força',
    wilksScore: 'Pontuação Wilks',
    ipfGl: 'Pontos IPF GL',
    classification: 'Classificação',
    copyResult: 'Copiar resultado',
    copied: 'Copiado',
    errorRequired: 'Peso corporal e total (ou os 3 levantamentos) são obrigatórios.',
    errorPositive: 'Os valores devem ser maiores que zero.',
    classUntrained: 'Não treinado',
    classBeginner: 'Iniciante',
    classIntermediate: 'Intermediário',
    classAdvanced: 'Avançado',
    classElite: 'Elite',
    classWorldClass: 'Nível mundial',
    tableTitle: 'Limiares de classificação Wilks',
    linksTitle: 'Veja também',
    toFfmi: 'Calculadora FFMI',
    toTools: 'Todas as ferramentas',
    faqTitle: 'FAQ',
    faq1q: 'O que é a pontuação Wilks e para que serve?',
    faq1a: 'Wilks é uma fórmula baseada em coeficientes que normaliza o total do powerlifting (agachamento + supino + terra) pelo peso corporal, gerando um único número que permite comparar um atleta de 60 kg com um de 110 kg em pé de igualdade. Foi o padrão de facto para prêmios de "melhor levantador" desde 1994 e continua sendo usado em muitas federações e rankings de academia.',
    faq2q: 'Por que mostrar também pontos IPF GL?',
    faq2a: 'O sistema IPF GL Points foi adotado pela International Powerlifting Federation em 2020 para substituir o Wilks em competições da IPF. Usa coeficientes diferentes, favorece levemente as categorias mais leves em relação ao Wilks antigo, e é o que você verá em qualquer evento IPF moderno. Mostrar os dois permite ler sua marca pelo padrão que sua federação ou competição local utiliza.',
    faq3q: 'Insiro o total manualmente ou levantamento por levantamento?',
    faq3a: 'Se já tem o total oficial de competição, insira direto — é a entrada mais precisa. Caso contrário, preencha agachamento, supino e terra e a calculadora soma automaticamente. Os dois métodos dão a mesma pontuação Wilks; o modo por levantamento é útil para ver como sua marca mudaria ao subir um movimento específico.',
    faq4q: 'Quais coeficientes Wilks esta calculadora usa?',
    faq4a: 'Esta calculadora usa os coeficientes Wilks revisados de 2017, que são o padrão atual ao qual a maioria se refere quando diz "Wilks". Os coeficientes originais de 1994 são ligeiramente diferentes e estão em desuso fora de comparações históricas. Ao comparar marcas anteriores a 2017, espere uma pequena diferença entre as versões.',
    faq5q: 'Como interpreto minha pontuação Wilks em termos absolutos?',
    faq5a: 'Um Wilks ao redor de 300 marca um atleta raw intermediário, 400 é avançado sólido, 450+ é competitivo em nível nacional forte, e 500+ entra em território elite/classe mundial. Mulheres atingem as mesmas faixas Wilks com totais absolutos menores porque os coeficientes já incluem as diferenças de força-por-peso entre os sexos.'
  },
  ja: {
    h1: 'Wilks計算機',
    subtitle: '2017年係数のWilksスコアとIPF GLポイントを、スクワット・ベンチ・デッドリフトの値から計算します。階級差や男女差を補正してパワーリフティングの強さを公平に比較できる方法です。',
    sex: '性別',
    male: '男性',
    female: '女性',
    unit: '単位',
    bodyweight: '体重',
    modeByLift: '種目別入力',
    modeTotal: 'トータルのみ',
    squat: 'スクワット',
    bench: 'ベンチプレス',
    deadlift: 'デッドリフト',
    total: 'トータル',
    autoTotal: '3種目を入力すると自動合計されます',
    calculate: 'Wilksを計算',
    clear: 'クリア',
    resultTitle: 'あなたの筋力スコア',
    wilksScore: 'Wilksスコア',
    ipfGl: 'IPF GLポイント',
    classification: '判定',
    copyResult: '結果をコピー',
    copied: 'コピーしました',
    errorRequired: '体重とトータル（または3種目入力）が必要です。',
    errorPositive: '数値は0より大きくしてください。',
    classUntrained: '未経験',
    classBeginner: '初級',
    classIntermediate: '中級',
    classAdvanced: '上級',
    classElite: 'エリート',
    classWorldClass: '世界レベル',
    tableTitle: 'Wilks判定の目安',
    linksTitle: '関連リンク',
    toFfmi: 'FFMI計算機',
    toTools: 'ツール一覧',
    faqTitle: 'よくある質問',
    faq1q: 'Wilksスコアとは何ですか？何のために使いますか？',
    faq1a: 'Wilksは、パワーリフティングのトータル（スクワット＋ベンチプレス＋デッドリフト）を体重で正規化する係数ベースの公式で、60 kgと110 kgのリフターを同じ土俵で比較できる単一スコアを算出します。1994年以降、ベストリフター賞のデファクトスタンダードとして使われ、現在も多くのローカル大会やジムのランキングで使用されています。',
    faq2q: 'なぜIPF GLポイントも表示するのですか？',
    faq2a: 'IPF GLポイントは2020年にIPF（国際パワーリフティング連盟）公認大会でWilksを置き換える形で採用されました。係数が異なり、旧Wilksに比べて軽量級にやや有利で、現代のIPF系の大会で目にする数値です。両方を表示することで、所属する団体や出場大会の基準に合わせて読めるようにしています。',
    faq3q: 'トータルは手入力と種目別入力のどちらがよいですか？',
    faq3a: '公式試合のトータルを既に持っている場合は手入力が最も正確です。なければスクワット・ベンチ・デッドリフトを入れれば自動合計されます。どちらでも同じWilksスコアになりますが、種目別入力モードは特定種目の伸びがスコアにどう影響するかを試算するのに便利です。',
    faq4q: 'このページのWilks係数は新旧どちらですか？',
    faq4a: '本計算機は2017年改訂版のWilks係数を使用しており、現在「Wilks」と呼ばれるときに多くの選手・団体が参照する標準値です。1994年版の係数とはやや異なり、歴史的比較以外ではほぼ使われません。2017年以前の記録と比較すると、わずかに差が出る場合があります。',
    faq5q: 'Wilksスコアの絶対値はどう解釈すればいいですか？',
    faq5a: '目安として、Wilks 300前後はrawの中級者、400で安定した上級者、450以上は強豪国内大会レベル、500以上はエリート／世界クラス領域です。女性は係数に体格・性差が織り込まれているため、より少ない絶対トータルで同じWilks帯に到達します。'
  }
};
