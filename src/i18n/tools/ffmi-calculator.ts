import type { Language } from '@/lib/i18n';

export interface FFMIToolI18n {
  h1: string;
  subtitle: string;
  unit: string;
  sex: string;
  male: string;
  female: string;
  weight: string;
  height: string;
  bodyFat: string;
  calculateFromMeasurements: string;
  neck: string;
  waist: string;
  hip: string;
  calculate: string;
  clear: string;
  resultTitle: string;
  lbm: string;
  ffmi: string;
  adjustedFfmi: string;
  classification: string;
  naturalCeiling: string;
  copyResult: string;
  copied: string;
  errorRequired: string;
  errorPositive: string;
  measurementNote: string;
  tableTitleMen: string;
  tableTitleWomen: string;
  categoryBelow: string;
  categoryAverage: string;
  categoryAbove: string;
  categoryExcellent: string;
  categorySuperior: string;
  categoryEnhanced: string;
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
  linksTitle: string;
  toWilks: string;
  toTools: string;
}

export const ffmiCalculatorI18n: Record<Language, FFMIToolI18n> = {
  en: {
    h1: 'FFMI Calculator',
    subtitle: 'Calculate your Fat-Free Mass Index, height-adjusted FFMI and natural muscle-potential ceiling. A clearer picture of your real lean-mass progress than BMI, with optional U.S. Navy body-fat estimation built in.',
    unit: 'Unit',
    sex: 'Sex',
    male: 'Male',
    female: 'Female',
    weight: 'Weight',
    height: 'Height',
    bodyFat: 'Body fat %',
    calculateFromMeasurements: 'Calculate body fat from measurements',
    neck: 'Neck circumference',
    waist: 'Waist circumference',
    hip: 'Hip circumference',
    calculate: 'Calculate FFMI',
    clear: 'Clear',
    resultTitle: 'Your FFMI results',
    lbm: 'Lean Body Mass',
    ffmi: 'FFMI',
    adjustedFfmi: 'Adjusted FFMI',
    classification: 'Classification',
    naturalCeiling: 'Natural muscle potential ceiling',
    copyResult: 'Copy result',
    copied: 'Copied',
    errorRequired: 'Please complete all required fields.',
    errorPositive: 'Values must be greater than zero.',
    measurementNote: 'If measurement mode is enabled, manual body fat is replaced by U.S. Navy estimation.',
    tableTitleMen: 'Adjusted FFMI classification (men)',
    tableTitleWomen: 'Adjusted FFMI classification (women)',
    categoryBelow: 'Below average',
    categoryAverage: 'Average',
    categoryAbove: 'Above average',
    categoryExcellent: 'Excellent',
    categorySuperior: 'Superior / advanced natural',
    categoryEnhanced: 'Likely enhanced',
    faqTitle: 'FAQ',
    faq1q: 'What is a good FFMI for natural lifters?',
    faq1a: 'Across the literature, most trained natural men sit at an adjusted FFMI below 25 and most trained natural women below 23. These ceilings are statistical, not absolute — a small fraction of natural lifters with elite genetics can exceed them, but adjusted FFMI well above the threshold is widely considered a strong indicator of pharmacological assistance.',
    faq2q: 'Is FFMI better than BMI for lifters?',
    faq2a: 'Yes, by a large margin. BMI lumps muscle and fat together, so a 90 kg lifter at 12% body fat reads "overweight" the same as a 90 kg sedentary person at 30% body fat. FFMI separates lean mass and gives a number that actually reflects training progress, which is exactly what you care about.',
    faq3q: 'Can I use estimated body fat instead of a measurement?',
    faq3a: 'Yes. This calculator accepts either a direct body-fat percentage (from a DEXA, BIA scale or trained eye estimate) or U.S. Navy measurements (neck, waist, plus hip for women). Navy measurements typically read within 3% of DEXA for lean lifters and 5% for those above 25% body fat.',
    faq4q: 'Why do you use the adjusted FFMI instead of raw FFMI?',
    faq4a: 'Raw FFMI systematically penalizes taller lifters and rewards shorter ones because it scales lean mass by height squared, which is too generous as height increases. The adjusted formula adds 6.3 × (1.8 − height in meters) to compensate, so a 1.65 m and a 1.95 m lifter with equivalent muscularity get comparable scores.',
    faq5q: 'How fast can I expect my FFMI to improve?',
    faq5a: 'Beginners can typically gain 1–2 FFMI points in their first year of consistent training, then 0.5–1 point per year for the next 2–3 years, with progress slowing after that. If your adjusted FFMI is climbing more than 1 point per year past the 3-year mark of serious training, double-check your body-fat reading — gains often come from improved measurement accuracy, not new muscle.',
    linksTitle: 'See also',
    toWilks: 'Wilks Calculator',
    toTools: 'All tools'
  },
  es: {
    h1: 'Calculadora FFMI',
    subtitle: 'Calcula tu Índice de Masa Magra (FFMI), el FFMI ajustado por altura y el techo de potencial muscular natural. Una imagen mucho más clara de tu progreso real de masa magra que el IMC, con estimación opcional de grasa por método U.S. Navy.',
    unit: 'Unidad',
    sex: 'Sexo',
    male: 'Hombre',
    female: 'Mujer',
    weight: 'Peso',
    height: 'Altura',
    bodyFat: 'Grasa corporal %',
    calculateFromMeasurements: 'Calcular grasa corporal con medidas',
    neck: 'Perímetro de cuello',
    waist: 'Perímetro de cintura',
    hip: 'Perímetro de cadera',
    calculate: 'Calcular FFMI',
    clear: 'Limpiar',
    resultTitle: 'Tus resultados FFMI',
    lbm: 'Masa corporal magra',
    ffmi: 'FFMI',
    adjustedFfmi: 'FFMI ajustado',
    classification: 'Clasificación',
    naturalCeiling: 'Techo de potencial muscular natural',
    copyResult: 'Copiar resultado',
    copied: 'Copiado',
    errorRequired: 'Completa todos los campos obligatorios.',
    errorPositive: 'Los valores deben ser mayores que cero.',
    measurementNote: 'Si activas el modo de medidas, la grasa corporal manual se reemplaza por la estimación U.S. Navy.',
    tableTitleMen: 'Clasificación FFMI ajustado (hombres)',
    tableTitleWomen: 'Clasificación FFMI ajustado (mujeres)',
    categoryBelow: 'Por debajo del promedio',
    categoryAverage: 'Promedio',
    categoryAbove: 'Por encima del promedio',
    categoryExcellent: 'Excelente',
    categorySuperior: 'Superior / natural avanzado',
    categoryEnhanced: 'Probable uso de ayudas',
    faqTitle: 'Preguntas frecuentes',
    faq1q: '¿Qué FFMI se considera bueno en naturales?',
    faq1a: 'En la literatura, la mayoría de hombres naturales entrenados se sitúan por debajo de un FFMI ajustado de 25, y la mayoría de mujeres naturales entrenadas por debajo de 23. Son techos estadísticos, no absolutos — una minoría con genética de élite puede superarlos, pero un FFMI ajustado muy por encima del umbral suele considerarse un indicador fuerte de ayuda farmacológica.',
    faq2q: '¿FFMI es mejor que IMC para quienes entrenan fuerza?',
    faq2a: 'Sí, por mucho. El IMC mezcla músculo y grasa, así que un atleta de 90 kg al 12% de grasa sale "con sobrepeso" igual que una persona sedentaria de 90 kg al 30%. El FFMI separa la masa magra y da un número que sí refleja el progreso real de entrenamiento, que es exactamente lo que te importa.',
    faq3q: '¿Puedo usar grasa corporal estimada en vez de medida?',
    faq3a: 'Sí. La calculadora acepta un porcentaje de grasa directo (de DEXA, báscula BIA o estimación visual entrenada) o medidas U.S. Navy (cuello, cintura, más cadera en mujeres). Las medidas Navy suelen quedar dentro del 3% de DEXA en atletas magros y del 5% en quienes están por encima del 25% de grasa.',
    faq4q: '¿Por qué se usa el FFMI ajustado y no el bruto?',
    faq4a: 'El FFMI bruto penaliza sistemáticamente a los altos y favorece a los bajos porque escala la masa magra al cuadrado de la altura, lo que es demasiado generoso a mayor estatura. La fórmula ajustada añade 6,3 × (1,8 − altura en metros) para compensar, de modo que un atleta de 1,65 m y otro de 1,95 m con musculatura equivalente obtienen puntuaciones comparables.',
    faq5q: '¿Cuánto puede subir mi FFMI con el tiempo?',
    faq5a: 'Un principiante suele ganar 1–2 puntos de FFMI en el primer año de entrenamiento consistente, luego 0,5–1 punto al año durante los siguientes 2–3 años, y se ralentiza después. Si tu FFMI ajustado sube más de 1 punto al año pasada la marca de 3 años entrenando en serio, verifica tu lectura de grasa corporal — muchas veces la "ganancia" viene de medir mejor, no de músculo nuevo.',
    linksTitle: 'Ver también',
    toWilks: 'Calculadora Wilks',
    toTools: 'Todas las herramientas'
  },
  pt: {
    h1: 'Calculadora FFMI',
    subtitle: 'Calcule seu Índice de Massa Magra (FFMI), o FFMI ajustado pela altura e o teto de potencial muscular natural. Uma imagem muito mais clara do seu progresso real de massa magra do que o IMC, com estimativa opcional de gordura pelo método U.S. Navy.',
    unit: 'Unidade',
    sex: 'Sexo',
    male: 'Homem',
    female: 'Mulher',
    weight: 'Peso',
    height: 'Altura',
    bodyFat: 'Gordura corporal %',
    calculateFromMeasurements: 'Calcular gordura corporal por medidas',
    neck: 'Circunferência do pescoço',
    waist: 'Circunferência da cintura',
    hip: 'Circunferência do quadril',
    calculate: 'Calcular FFMI',
    clear: 'Limpar',
    resultTitle: 'Seus resultados FFMI',
    lbm: 'Massa magra corporal',
    ffmi: 'FFMI',
    adjustedFfmi: 'FFMI ajustado',
    classification: 'Classificação',
    naturalCeiling: 'Teto de potencial muscular natural',
    copyResult: 'Copiar resultado',
    copied: 'Copiado',
    errorRequired: 'Preencha todos os campos obrigatórios.',
    errorPositive: 'Os valores devem ser maiores que zero.',
    measurementNote: 'Com o modo de medidas ativo, a gordura manual é substituída pela estimativa U.S. Navy.',
    tableTitleMen: 'Classificação FFMI ajustado (homens)',
    tableTitleWomen: 'Classificação FFMI ajustado (mulheres)',
    categoryBelow: 'Abaixo da média',
    categoryAverage: 'Médio',
    categoryAbove: 'Acima da média',
    categoryExcellent: 'Excelente',
    categorySuperior: 'Superior / natural avançado',
    categoryEnhanced: 'Provável uso de ergogênicos',
    faqTitle: 'FAQ',
    faq1q: 'Qual FFMI é bom para naturais?',
    faq1a: 'Na literatura, a maioria dos homens naturais treinados fica abaixo de FFMI ajustado 25, e a maioria das mulheres naturais treinadas abaixo de 23. São tetos estatísticos, não absolutos — uma minoria com genética de elite pode ultrapassá-los, mas um FFMI ajustado muito acima do limiar é considerado um forte indicador de uso farmacológico.',
    faq2q: 'FFMI é melhor que IMC para quem treina força?',
    faq2a: 'Sim, por uma larga margem. O IMC mistura músculo e gordura — um atleta de 90 kg com 12% de gordura aparece como "acima do peso" igual a um sedentário de 90 kg com 30%. O FFMI separa a massa magra e entrega um número que reflete o progresso real do treino, que é o que importa.',
    faq3q: 'Posso usar gordura corporal estimada em vez de medida?',
    faq3a: 'Sim. A calculadora aceita um percentual de gordura direto (de DEXA, balança BIA ou estimativa visual treinada) ou medidas U.S. Navy (pescoço, cintura, mais quadril em mulheres). As medidas Navy costumam ficar dentro de 3% do DEXA em atletas magros e de 5% em quem está acima de 25% de gordura.',
    faq4q: 'Por que usar FFMI ajustado em vez do bruto?',
    faq4a: 'O FFMI bruto penaliza sistematicamente atletas mais altos e favorece os mais baixos porque escala a massa magra pelo quadrado da altura, o que se torna generoso demais em alturas maiores. A fórmula ajustada soma 6,3 × (1,8 − altura em metros) para compensar, de modo que um atleta de 1,65 m e outro de 1,95 m com musculatura equivalente recebam pontuações comparáveis.',
    faq5q: 'Quanto meu FFMI pode subir com o tempo?',
    faq5a: 'Um iniciante costuma ganhar 1–2 pontos de FFMI no primeiro ano de treino consistente, depois 0,5–1 ponto por ano nos 2–3 anos seguintes, com desaceleração depois disso. Se seu FFMI ajustado sobe mais de 1 ponto por ano após a marca dos 3 anos treinando sério, confira a leitura de gordura corporal — muitas vezes o "ganho" vem de medir melhor, não de músculo novo.',
    linksTitle: 'Veja também',
    toWilks: 'Calculadora Wilks',
    toTools: 'Todas as ferramentas'
  },
  ja: {
    h1: 'FFMI計算機',
    subtitle: '除脂肪量指数（FFMI）、身長補正FFMI、ナチュラル筋量の上限目安を計算します。BMIよりも除脂肪量の進捗を正確に把握でき、U.S. Navy法による体脂肪率推定にも対応しています。',
    unit: '単位',
    sex: '性別',
    male: '男性',
    female: '女性',
    weight: '体重',
    height: '身長',
    bodyFat: '体脂肪率 %',
    calculateFromMeasurements: '計測値から体脂肪率を計算',
    neck: '首囲',
    waist: '腹囲',
    hip: '臀囲',
    calculate: 'FFMIを計算',
    clear: 'クリア',
    resultTitle: 'FFMI結果',
    lbm: '除脂肪体重',
    ffmi: 'FFMI',
    adjustedFfmi: '補正FFMI',
    classification: '判定',
    naturalCeiling: 'ナチュラル筋量の上限目安',
    copyResult: '結果をコピー',
    copied: 'コピーしました',
    errorRequired: '必須項目を入力してください。',
    errorPositive: '数値は0より大きくしてください。',
    measurementNote: '計測モードを有効にすると、手入力の体脂肪率はU.S. Navy推定値で上書きされます。',
    tableTitleMen: '補正FFMI判定（男性）',
    tableTitleWomen: '補正FFMI判定（女性）',
    categoryBelow: '平均未満',
    categoryAverage: '平均',
    categoryAbove: '平均以上',
    categoryExcellent: '優秀',
    categorySuperior: '上級ナチュラル',
    categoryEnhanced: '強化の可能性が高い',
    faqTitle: 'よくある質問',
    faq1q: 'ナチュラルで高いFFMIはどのくらいですか？',
    faq1a: '研究データでは、トレーニング歴のあるナチュラル男性の多くは補正FFMI 25未満、ナチュラル女性の多くは23未満に収まります。これは統計的な上限であり絶対値ではありません。エリート遺伝子を持つごく一部のナチュラルはこれを超えますが、しきい値を大きく上回る補正FFMIは薬物使用の有力な指標とされています。',
    faq2q: '筋力トレーニングではBMIよりFFMIの方が有用ですか？',
    faq2a: 'はい、大きな差があります。BMIは筋肉と脂肪を区別しないため、体重90 kg・体脂肪12%のリフターと、体重90 kg・体脂肪30%のセデンタリーが同じ「太り気味」と判定されます。FFMIは除脂肪量に注目するため、トレーニングの実際の進捗を反映する数値が得られます。',
    faq3q: '体脂肪率は推定値でも使えますか？',
    faq3a: 'はい。直接入力（DEXA、BIA体組成計、訓練された目視推定など）と、U.S. Navy法による計測（首・腹囲、女性は臀囲も）のどちらにも対応しています。Navy法は痩せ型の選手でDEXAから±3%、体脂肪率25%超で±5%程度の精度が一般的です。',
    faq4q: 'なぜ補正FFMIを使うのですか？',
    faq4a: '生のFFMIは身長が高い人を不利に、低い人を有利に評価する傾向があります。除脂肪量を身長の二乗で除しているため、身長が伸びるほど指数が緩くなりすぎるためです。補正式では 6.3 ×（1.8 − 身長[m]）を加算してこれを相殺し、165 cmと195 cmで筋量が同等の選手が同等のスコアを得られるようにしています。',
    faq5q: 'FFMIはどのくらいのペースで上がりますか？',
    faq5a: '一般に、初心者は最初の1年で1〜2ポイント、その後の2〜3年は年0.5〜1ポイント、それ以降はさらに鈍化します。本気で3年以上トレーニングしている段階で年1ポイント以上補正FFMIが上がるなら、体脂肪率の測定方法を再確認してください。多くの場合「増加」の正体は新しい筋肉ではなく、計測精度の改善です。',
    linksTitle: '関連リンク',
    toWilks: 'Wilks計算機',
    toTools: 'ツール一覧'
  }
};
