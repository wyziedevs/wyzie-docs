const messages: Record<string, string> = {
  // Navigation
  'nav.language': 'Idioma',

  // Index / Landing Page
  'index.subtitle':
    'Wyzie é um conjunto de ferramentas open-source para busca de legendas e tudo mais que envolve isso.',
  'index.cta.start': 'Começar',
  'index.cta.store': 'Confira',

  'index.card.keys.title': 'Chaves de API Gratuitas',
  'index.card.keys.body':
    'Obtenha uma chave de API gratuita em store.wyzie.io/redeem com uma verificação rápida pelo Gmail. 1.000 requisições/dia sem custo. Planos pagos disponíveis para uso mais intenso.',

  'index.card.ai.title': 'Tradução com IA',
  'index.card.ai.body':
    'Traduza qualquer legenda para mais de 80 idiomas sob demanda. Transmite linha por linha para que a reprodução possa começar em segundos. Disponível em chaves Pro.',

  'index.card.reliable.title': 'Confiável',
  'index.card.reliable.body':
    'Temos orgulho do nosso tempo de atividade consistente e atualizações (quase) diárias, além de cache rápido.',

  'index.card.simple.title': 'Simplicidade Redefinida',
  'index.card.simple.body':
    'Fácil de implementar, fácil de usar. O Wyzie foi projetado para ser o mais simples possível.',

  // Donate Page
  'donate.title': 'Por Favor, Faça uma Doação',
  'donate.body':
    'Olá, usuário. O Wyzie está dependendo bastante de doações agora (que mal recebo) e eu tenho 16 anos com um emprego de meio período. Às vezes minha conta mensal para manter a API pública ultrapassa 100$. Não consigo continuar dando suporte a isso sem ajuda externa. Sinto muito, mas este projeto cresceu além do que eu conseguia bancar do próprio bolso.',
  'donate.cta': 'Apoiar o Wyzie',

  // Subs Intro Page
  'subs.intro.title': 'Introdução ao Wyzie Subs',
  'subs.intro.p1':
    'Wyzie Subs é uma API gratuita e livre de código aberto para busca de legendas. Há duas formas de fazer requisições à API: usando nosso pacote NPM ou buscando a API Wyzie diretamente. Recomendo usar nosso pacote, mas alguns podem achar os tipos um pouco trabalhosos. Para usar a API, você precisa primeiro tomar essa decisão.',
  'subs.intro.note.ai':
    'Tradução com IA está disponível para chaves Pro. Qualquer título, mais de 80 idiomas de destino, transmitido enquanto o tradutor trabalha.',
  'subs.intro.important.apikey':
    'Uma chave de API é necessária para todas as requisições. Obtenha uma chave gratuita em [store.wyzie.io/redeem](https://store.wyzie.io/redeem) (verificação Gmail, 1.000 requisições/dia). Para uso mais intenso, [planos Pro e de recarga](https://store.wyzie.io) estão disponíveis. Veja a página de Chaves de API para mais detalhes.',
  'subs.intro.note.npm':
    'Recomendamos fortemente o pacote NPM se você está familiarizado com TypeScript ou JavaScript',
  'subs.intro.btn.npm': 'Pacote NPM',
  'subs.intro.btn.direct': 'Busca Direta',

  'subs.intro.protect.h2': 'Protegendo Sua Chave de API',
  'subs.intro.protect.important':
    '**Incidente real:** vimos desenvolvedores colando sua chave diretamente no JavaScript de frontend de um site de streaming. Em poucas horas, uma parte não relacionada a extraiu do bundle JS e a usou até esgotar o limite diário ou o saldo pago. Cotas perdidas dessa forma não são reembolsáveis e são tratadas como responsabilidade do proprietário da chave, conforme nossos Termos.',
  'subs.intro.protect.p1':
    'Sua chave de API deve ser mantida em sigilo e **nunca** deve aparecer em:',
  'subs.intro.protect.item1':
    'JavaScript do navegador (qualquer coisa servida para uma tag script)',
  'subs.intro.protect.item2':
    'Binários de aplicativos móveis (Android/iOS, incluindo versões ofuscadas)',
  'subs.intro.protect.item3': 'Extensões de navegador',
  'subs.intro.protect.item4':
    'Apps Electron / desktop distribuídos a usuários finais',
  'subs.intro.protect.item5':
    'Repositórios Git públicos, gists, sites de cola ou capturas de tela',
  'subs.intro.protect.p2':
    'Se a chave chegar à máquina de um usuário final, trate-a como pública. Há dois padrões seguros:',
  'subs.intro.protect.opt1.h3': 'Opção 1: Use o Wyzie Worker',
  'subs.intro.protect.opt1.p1':
    'Wyzie Worker é um proxy leve via Cloudflare Worker que injeta sua chave de API no lado do servidor. Faça o deploy no Cloudflare Workers e defina sua chave como variável de ambiente NITRO_API_TOKEN. Então aponte as requisições do seu cliente para a URL do seu worker em vez de sub.wyzie.io — o worker as encaminha com sua chave anexada.',
  'subs.intro.protect.opt2.h3': 'Opção 2: Construa Seu Próprio Proxy',
  'subs.intro.protect.opt2.p1':
    'Se preferir não usar o Wyzie Worker, você pode criar um proxy simples no lado do servidor em qualquer framework. A ideia é a mesma: seu backend recebe as requisições do cliente, adiciona a chave de API e as encaminha para sub.wyzie.io.',

  // Subs Sources Page
  'subs.sources.title': 'Fontes do Wyzie Subs',
  'subs.sources.p1':
    'O Wyzie Subs agrega legendas de vários provedores. A disponibilidade das fontes pode variar dependendo do status do provedor ou se uma fonte estiver fora do ar. Estou sempre buscando novas fontes — entre em contato para sugerir uma.',

  'subs.sources.using.h2': 'Usando Fontes',
  'subs.sources.using.bullet1':
    'Use source=all para consultar todas as fontes habilitadas simultaneamente',
  'subs.sources.using.bullet2':
    'A fonte padrão é opensubtitles se não especificada',
  'subs.sources.using.bullet3':
    'Várias fontes podem ser especificadas como uma lista separada por vírgulas',

  'subs.sources.api.h2': 'Endpoint da API',
  'subs.sources.api.p1':
    'Você pode buscar programaticamente a lista de fontes atualmente habilitadas e seu nível de plano:',
  'subs.sources.api.free':
    'fontes que qualquer chave pode consultar, incluindo chaves gratuitas.',
  'subs.sources.api.paid': 'fontes que requerem uma chave Pro.',
  'subs.sources.api.allFree':
    'quando verdadeiro, toda fonte habilitada está disponível para todas as chaves e paid fica vazio.',

  'subs.sources.scope.h3': 'Filtrando por chave',
  'subs.sources.scope.p1':
    'Passe sua chave de API para obter as fontes que aquela chave pode realmente usar:',
  'subs.sources.scope.p2':
    'Isso adiciona campos específicos da chave sem consumir uma requisição da sua cota:',
  'subs.sources.scope.available': 'fontes que esta chave pode consultar agora.',
  'subs.sources.scope.restricted':
    'fontes habilitadas que esta chave não pode consultar (faça upgrade para Pro para desbloqueá-las).',
  'subs.sources.scope.keyType': 'gratuita ou paga.',
  'subs.sources.scope.keyValid':
    'é falso quando a chave está malformada ou não encontrada, e nulo quando a chave não pôde ser verificada (nesse caso available e restricted são omitidos).',

  'subs.sources.details.h2': 'Detalhes das Fontes',

  'subs.sources.opensubtitles.desc':
    'O maior banco de dados de legendas online. Suporta filmes e séries em uma ampla variedade de idiomas. Usa a API REST oficial do OpenSubtitles.',
  'subs.sources.opensubtitles.content': 'Filmes e séries',
  'subs.sources.opensubtitles.languages': 'Amplo suporte multilíngue',
  'subs.sources.opensubtitles.formats': 'SRT, ASS, SSA, VTT, SUB e mais',

  'subs.sources.subdl.desc':
    'Um site de legendas mantido pela comunidade com uma ampla seleção de filmes e séries.',
  'subs.sources.subdl.content': 'Filmes e séries',
  'subs.sources.subdl.languages': 'Amplo suporte multilíngue',
  'subs.sources.subdl.formats': 'SRT, ASS, SSA, VTT, SUB e mais',

  'subs.sources.subf2m.desc':
    'Um grande repositório de legendas com extensa cobertura de idiomas para filmes e séries.',
  'subs.sources.subf2m.content': 'Filmes e séries',
  'subs.sources.subf2m.languages': 'Amplo suporte multilíngue',
  'subs.sources.subf2m.formats': 'SRT, ASS, SSA, VTT, SUB e mais',

  'subs.sources.podnapisi.desc':
    'Um dos bancos de dados de legendas mais antigos. Coleção bem curada cobrindo filmes e séries.',
  'subs.sources.podnapisi.content': 'Filmes e séries',
  'subs.sources.podnapisi.languages': 'Amplo suporte multilíngue',
  'subs.sources.podnapisi.formats': 'SRT, ASS, SSA, VTT, SUB e mais',

  'subs.sources.animetosho.desc':
    'Extrai anexos de legendas de anime diretamente de lançamentos de torrent indexados no AnimeTosho.',
  'subs.sources.animetosho.content': 'Anime (séries)',
  'subs.sources.animetosho.languages':
    'Japonês, inglês e outros dependendo do lançamento',
  'subs.sources.animetosho.formats': 'ASS, SRT, SSA e outros',
  'subs.sources.animetosho.note':
    'O AnimeTosho está programado para encerrar em maio de 2026.',

  'subs.sources.gestdown.desc':
    'Fornece legendas para séries via API Gestdown com amplo suporte a idiomas.',
  'subs.sources.gestdown.content': 'Apenas séries',
  'subs.sources.gestdown.languages': 'Amplo suporte multilíngue',
  'subs.sources.gestdown.formats': 'SRT, ASS e mais',

  'subs.sources.jimaku.desc':
    'Extrai dados do jimaku.cc, um repositório de arquivos de legendas de anime mantido pela comunidade. Corresponde títulos usando a API TMDB.',
  'subs.sources.jimaku.content': 'Anime (filmes e séries)',
  'subs.sources.jimaku.languages':
    'Principalmente japonês; também inglês, chinês e mais, dependendo dos arquivos disponíveis',
  'subs.sources.jimaku.formats': 'SRT, ASS, SSA, VTT, SUB e outros',

  'subs.sources.kitsunekko.desc':
    'Extrai listagens de diretórios do kitsunekko.net, um repositório dedicado de legendas de anime. Corresponde títulos usando a API TMDB.',
  'subs.sources.kitsunekko.content': 'Anime (séries)',
  'subs.sources.kitsunekko.languages':
    'Diretórios de legendas em inglês e japonês',
  'subs.sources.kitsunekko.formats': 'SRT, ASS, SSA, VTT, SUB e outros',

  'subs.sources.yify.desc':
    'Extrai legendas de yifysubtitles.ch correspondidas por IMDB ID. Apenas filmes.',
  'subs.sources.yify.content': 'Apenas filmes (séries não são suportadas)',
  'subs.sources.yify.languages':
    'Amplo suporte multilíngue (albanês, árabe, inglês, francês, espanhol e muito mais)',
  'subs.sources.yify.formats': 'SRT (entregue dentro de um arquivo ZIP)',

  'subs.sources.ajatttools.desc':
    'Busca legendas do repositório GitHub Ajatt-Tools/kitsunekko-mirror. Organizado por tipo de mídia. Corresponde títulos usando a API TMDB.',
  'subs.sources.ajatttools.content': 'Anime e drama (séries e filmes)',
  'subs.sources.ajatttools.languages':
    'Principalmente japonês; também inglês, chinês e outros',
  'subs.sources.ajatttools.formats': 'SRT, ASS, SSA, VTT, SUB e outros',

  'subs.sources.ai.desc':
    'Não é um extrator. SRT traduzido por IA gerado sob demanda a partir da melhor legenda fonte disponível. Veja o guia de Tradução com IA para todos os detalhes.',
  'subs.sources.ai.content':
    'Qualquer coisa para a qual o Wyzie encontrar um SRT',
  'subs.sources.ai.languages': 'Mais de 80 idiomas de destino',
  'subs.sources.ai.formats': 'Apenas SRT',

  // Subs Package Page
  'subs.pkg.title': 'Usando o Pacote NPM do Wyzie',
  'subs.pkg.p1':
    'O pacote NPM do Wyzie Subs fornece uma interface simples e fácil de usar para busca e obtenção de legendas.',
  'subs.pkg.install.h2': 'Instalação',
  'subs.pkg.important':
    'Uma chave de API é necessária para todas as requisições. Obtenha uma chave gratuita em [store.wyzie.io/redeem](https://store.wyzie.io/redeem) e passe-a pelo parâmetro key. Veja a página de Chaves de API para mais detalhes.',
  'subs.pkg.usage.h2': 'Uso',
  'subs.pkg.params.h3': 'Parâmetros',
  'subs.pkg.params.note':
    'Para mais informações (ou se estiver com dúvidas), visite a [página inicial do Wyzie Subs](https://sub.wyzie.io).',

  'subs.pkg.param.tmdb':
    'ID TMDB do filme ou série (tmdb_id ou imdb_id é obrigatório).',
  'subs.pkg.param.imdb':
    'ID IMDB do filme ou série (imdb_id ou tmdb_id é obrigatório).',
  'subs.pkg.param.format':
    'Formatos de arquivo a retornar (ex.: srt, ass). Aceita uma lista.',
  'subs.pkg.param.season': 'Número da temporada (requer episode).',
  'subs.pkg.param.episode': 'Número do episódio (requer season).',
  'subs.pkg.param.language':
    'Códigos ISO 639-1 para o idioma da legenda. Aceita uma lista.',
  'subs.pkg.param.encoding':
    'Filtro de codificação de caracteres (ex.: utf-8, latin-1).',
  'subs.pkg.param.hi': 'Booleano para legendas para deficientes auditivos.',
  'subs.pkg.param.source':
    'Provedores de legenda a consultar (all para todas as fontes habilitadas).',
  'subs.pkg.param.release': 'Filtros de release/cena (aceita uma lista).',
  'subs.pkg.param.filename':
    'Filtros de nome de arquivo; os aliases file e fileName são suportados.',
  'subs.pkg.param.origin':
    'Filtro de origem do conteúdo (ex.: WEB, BLURAY, DVD).',
  'subs.pkg.param.key':
    'Sua chave de API (obrigatória). Obtenha uma gratuitamente em store.wyzie.io/redeem.',
  'subs.pkg.param.refresh':
    'Ignora o cache e busca resultados frescos das fontes.',

  'subs.pkg.helpers':
    'O pacote também inclui helpers leves para o TMDB: searchTmdb, getTvDetails e getSeasonDetails para encontrar IDs rapidamente antes de chamar /search. Além disso, getSources pode ser usado para buscar a lista de fontes de legendas habilitadas atualmente.',
  'subs.pkg.types.h3': 'Tipos',
  'subs.pkg.type.search': 'Todos os parâmetros válidos reconhecidos pela API.',
  'subs.pkg.type.query':
    'Todos os parâmetros (opcionais e obrigatórios) disponíveis para a API wyzie-subs.',
  'subs.pkg.type.subtitle':
    'Todos os valores retornados pela API com seus respectivos tipos.',
  'subs.pkg.type.sources': 'Tipo de resposta do endpoint /sources.',
  'subs.pkg.types.end':
    'Nossos tipos são muito simples e bem documentados. Confira o arquivo types.ts vinculado no repositório do GitHub.',
  'subs.pkg.config.h3': 'Configuração',
  'subs.pkg.config.p1':
    'Um usuário pediu no Github um hostname de API configurável e pensei: cara, isso é uma boa ideia. Então abaixo está o uso. Valeu, galera!',

  // Subs Direct Page
  'subs.direct.title': 'Buscando o Wyzie Subs Diretamente',
  'subs.direct.caution':
    'Recomendo fortemente usar o pacote NPM, pois é mais fácil e mais confiável.',
  'subs.direct.p1':
    'Se você decidiu não usar o pacote NPM, vamos começar. Vou abordar apenas os parâmetros da API e os dados retornados por ela. A forma como você faz requisições à API é totalmente por sua conta.',
  'subs.direct.important':
    'Uma chave de API é necessária para todas as requisições. Obtenha uma chave gratuita em [store.wyzie.io/redeem](https://store.wyzie.io/redeem) e inclua-a como &key=YOUR_KEY em cada requisição. Veja a página de Chaves de API para mais detalhes.',

  'subs.direct.params.h3': 'Parâmetros',
  'subs.direct.param.id': 'ID TMDB ou IMDB do programa ou filme (obrigatório).',
  'subs.direct.param.seasonEpisode':
    'Temporada e episódio para buscas de séries. Ambos devem estar presentes juntos.',
  'subs.direct.param.language':
    'Filtro de idioma (códigos ISO 639-1). Vários valores são separados por vírgula.',
  'subs.direct.param.format':
    'Formatos de legenda a retornar. Vários valores são permitidos.',
  'subs.direct.param.hi':
    'Se deve preferir legendas para deficientes auditivos.',
  'subs.direct.param.encoding': 'Filtro de codificação de caracteres.',
  'subs.direct.param.source':
    'Provedores de legenda a consultar (all consulta todas as fontes habilitadas; padrão opensubtitles).',
  'subs.direct.param.release':
    'Filtros de release ou nome de cena (separados por vírgula).',
  'subs.direct.param.file':
    'Filtros de nome de arquivo (aliases: file, filename, fileName).',
  'subs.direct.param.origin':
    'Filtro de origem do conteúdo, separado por vírgula (ex.: WEB, BLURAY, DVD).',
  'subs.direct.param.key':
    'Sua chave de API (obrigatória). Obtenha uma gratuitamente em store.wyzie.io/redeem.',
  'subs.direct.param.refresh':
    'Ignora o cache e busca resultados frescos. Use quando as fontes podem ter sido atualizadas.',
  'subs.direct.important.imdb':
    "Ao usar um IMDB ID, certifique-se de que os dois primeiros caracteres ('tt') estejam incluídos no início do ID.",

  'subs.direct.data.h3': 'Dados Retornados',
  'subs.direct.data.id': 'O ID do arquivo de legenda.',
  'subs.direct.data.url': 'A URL do arquivo de legenda.',
  'subs.direct.data.flagUrl': 'URL para a bandeira do locale do idioma.',
  'subs.direct.data.format': 'O formato do arquivo de legenda.',
  'subs.direct.data.encoding':
    'A codificação de caracteres do arquivo de legenda.',
  'subs.direct.data.display':
    'O idioma da legenda, com a primeira letra maiúscula.',
  'subs.direct.data.language': 'O código ISO 3166-2 do idioma.',
  'subs.direct.data.media': 'O nome da mídia à qual as legendas pertencem.',
  'subs.direct.data.isHearingImpaired':
    'Booleano indicando se a legenda é acessível para deficientes auditivos.',
  'subs.direct.data.source': 'De qual fonte a legenda foi extraída.',
  'subs.direct.data.release': 'Nome principal do release.',
  'subs.direct.data.releases':
    'Outros nomes de release compatíveis com a legenda.',
  'subs.direct.data.fileName': 'Nome de arquivo original quando disponível.',
  'subs.direct.data.downloadCount':
    'Número de downloads na plataforma de origem (se disponível).',
  'subs.direct.data.origin': 'Origem do conteúdo (ex.: WEB, BluRay, DVD).',
  'subs.direct.data.matchedRelease':
    'Valor de release que correspondeu ao seu filtro (se fornecido).',
  'subs.direct.data.matchedFilter':
    'O filtro fornecido pelo usuário que correspondeu (se fornecido).',
  'subs.direct.data.ai':
    'true se a entrada for uma legenda traduzida por IA, false para legendas extraídas normalmente. Use como filtro no lado do cliente quando quiser apenas um ou outro.',

  // Subs Translate Page
  'subs.translate.title': 'Tradução de Legendas com IA',
  'subs.translate.important':
    'Tradução com IA é um **recurso Pro**. Cada tradução custa **100 requisições** do saldo da sua chave, cobradas tanto em acerto de cache quanto em tradução nova. Chaves gratuitas não podem usá-la.',
  'subs.translate.p1':
    'O Wyzie pode traduzir qualquer legenda para mais de 80 idiomas em tempo real. As traduções são transmitidas conforme o modelo as produz, então a reprodução pode começar em um ou dois segundos em vez de aguardar o arquivo completo. Os resultados ficam em cache por 30 dias, então a segunda pessoa que solicitar a mesma tradução a recebe instantaneamente.',

  'subs.translate.ways.h2': 'Duas Formas de Usar',
  'subs.translate.way1.h3':
    '1. Escolha um Idioma a Partir de uma Resposta de Busca',
  'subs.translate.way1.p1':
    'Toda resposta de /search agora inclui uma entrada extra por idioma suportado com "ai": true e uma url que aponta para /translate. Basta tratar as linhas de IA como qualquer outra linha de legenda na sua interface: quando o usuário clicar em uma, busque a URL.',
  'subs.translate.way1.filter':
    'Se quiser ocultar as linhas de IA da sua interface, filtre-as:',
  'subs.translate.way2.h3': '2. Chame /translate Diretamente',

  'subs.translate.param.id': 'ID TMDB ou IMDB (obrigatório).',
  'subs.translate.param.target':
    'Idioma de destino como seu nome completo em inglês (ex.: Spanish, Japanese, Brazilian Portuguese) (obrigatório).',
  'subs.translate.param.seasonEpisode':
    'Para séries. Ambos devem estar presentes juntos.',
  'subs.translate.param.key':
    'Sua chave de API. Use tk se obteve a URL do /search.',
  'subs.translate.param.tk':
    'Token assinado retornado pelo /search. Equivalente a key, mas não expõe a chave bruta.',

  'subs.translate.headers.p':
    'O corpo da resposta é um arquivo SRT transmitido como text/plain; charset=utf-8. Cabeçalhos de resposta úteis:',
  'subs.translate.header.xcache':
    'HIT-REDIS se servido do cache, MISS se gerado fresco.',
  'subs.translate.header.xsourcelang':
    'idioma da legenda usada pelo tradutor como entrada.',
  'subs.translate.header.xtargetlang': 'eco do seu parâmetro target.',
  'subs.translate.header.xsourceprovider':
    'qual extrator forneceu a legenda fonte.',

  'subs.translate.how.h2': 'Como Funciona',
  'subs.translate.how.step1':
    'O Wyzie busca nas fontes normais uma legenda SRT, preferindo inglês quando disponível.',
  'subs.translate.how.step2':
    'O SRT é dividido em blocos de 50 cues e traduzido sequencialmente. Cada bloco é armazenado em cache individualmente ao ser concluído.',
  'subs.translate.how.step3':
    'A saída é transmitida de volta para você cue por cue. Players que aceitam um corpo SRT em streaming podem começar a mostrar as primeiras linhas antes do restante estar pronto.',
  'subs.translate.how.step4':
    'A tradução completa é armazenada em cache no Redis por 30 dias, indexada por id, season, episode e target.',

  'subs.translate.languages.h2': 'Idiomas de Destino Suportados',
  'subs.translate.languages.p':
    'Mais de 80 idiomas, incluindo todos os principais idiomas europeus, asiáticos, africanos e do Oriente Médio. Passe o nome em inglês (Spanish, não es). A lista também é retornada como linhas ai: true em qualquer resposta de /search, que é a fonte canônica de verdade.',

  'subs.translate.limitations.h2': 'Limitações',
  'subs.translate.limit1':
    'A tradução com IA precisa de uma fonte SRT. Títulos em que todas as legendas disponíveis são .ass, .vtt ou outro formato retornarão 404 No SRT found.',
  'subs.translate.limit2':
    'A qualidade da tradução depende da legenda fonte. Uma fonte com marcação de tempo ruim ou erros de digitação produzirá uma tradução com os mesmos problemas.',
  'subs.translate.limit3':
    'Alguns usuários podem querer remover completamente as linhas de IA. Filtre por ai === false no seu cliente.',
  'subs.translate.limit4':
    'As traduções são cobradas mesmo em acertos de cache. Seja gerada recentemente ou servida do cache de 30 dias, cada requisição /translate custa 100 requisições.',

  // Subs API Keys Page
  'subs.keys.title': 'Chaves de API',
  'subs.keys.p1':
    'O Wyzie Subs requer uma chave de API para todas as requisições. O nível gratuito cobre a maioria dos casos de uso; planos pagos atendem ao uso mais intenso.',

  'subs.keys.tiers.h2': 'Planos',
  'subs.keys.tier.free': 'Gratuito (Gmail obrigatório)',
  'subs.keys.tier.free.limit': '1.000 requisições / dia UTC',
  'subs.keys.tier.pro': '$5 pagamento único',
  'subs.keys.tier.pro.limit': '400.000 requisições',
  'subs.keys.tier.topup': 'a partir de $0,0625 / 5K',
  'subs.keys.tier.topup.limit': 'Adiciona ao seu saldo pago',
  'subs.keys.tiers.end':
    'Planos Pro e recargas não expiram. Prefere algo recorrente? Uma assinatura de $32/mês oferece 6.000.000 de requisições/mês (apenas cartão). Veja store.wyzie.io para preços completos e o painel.',

  'subs.keys.free.h2': 'Obtendo uma Chave Gratuita',
  'subs.keys.free.p':
    'Acesse [store.wyzie.io/redeem](https://store.wyzie.io/redeem):',
  'subs.keys.free.step1': 'Resolva um captcha rápido do Cloudflare Turnstile.',
  'subs.keys.free.step2':
    'Insira um endereço Gmail (apenas Gmail é aceito para o plano gratuito).',
  'subs.keys.free.step3':
    'Insira o código de 6 dígitos que enviamos por e-mail.',
  'subs.keys.free.step4':
    'Você recebe uma chave de API com aparência wyzie-abc123...',
  'subs.keys.free.gmail':
    'Cada endereço Gmail só pode resgatar uma chave gratuita. Já tinha uma chave gratuita vinculada a esse e-mail? Verificar novamente apenas retorna sua chave existente.',

  'subs.keys.pro.h2': 'Fazendo Upgrade para Pro',
  'subs.keys.pro.p1':
    'Acesse [store.wyzie.io](https://store.wyzie.io) e finalize a compra com o mesmo e-mail usado para sua chave gratuita. Sua chave wyzie-... existente é atualizada no lugar com 400K de requisições pagas adicionadas. Prefere algo recorrente? Uma assinatura de $32/mês adiciona uma franquia mensal de 6.000.000 de requisições (apenas cartão) em vez disso.',
  'subs.keys.pro.p2':
    'Se você finalizar com um e-mail totalmente novo (sem chave anterior), uma nova chave wyzie-... é gerada e enviada para você por e-mail.',

  'subs.keys.protect.h2': 'Mantenha Sua Chave Fora do Cliente',
  'subs.keys.protect.important':
    '**Nunca incorpore sua chave de API em código do lado do cliente.** JavaScript do navegador, aplicativos móveis, extensões de navegador, apps desktop no estilo Electron e repositórios Git públicos são todos considerados lado do cliente. Qualquer coisa que você entrega a um usuário final pode ser inspecionada por ele, e já vimos casos reais em que usuários colaram sua chave no frontend de um site de streaming, apenas para ter um terceiro extraindo o bundle JS e drenando o saldo de requisições em poucas horas. A cota consumida dessa forma não é reembolsável.',
  'subs.keys.protect.p2':
    'Duas formas seguras de usar a chave em um app cliente:',
  'subs.keys.protect.option1':
    'Use o [Wyzie Worker](https://github.com/wyziedevs/wyzie-worker): um proxy gratuito via Cloudflare Worker que mantém sua chave no lado do servidor. Aponte seu cliente para a URL do Worker em vez de sub.wyzie.io.',
  'subs.keys.protect.option2':
    'Execute seu próprio proxy: qualquer endpoint de backend que adicione a chave antes de encaminhar para sub.wyzie.io funciona. Veja a página de Introdução para um exemplo de 10 linhas.',
  'subs.keys.protect.devtools':
    'Se a chave aparecer em uma aba de rede no DevTools, ela está exposta. Trate-a como pública e substitua-a enviando um e-mail para o suporte.',

  'subs.keys.using.h2': 'Usando Sua Chave',
  'subs.keys.using.p': 'Adicione &key=YOUR_KEY a cada requisição da API:',
  'subs.keys.using.npm.h3': 'Pacote NPM',

  'subs.keys.limit.h2': 'Atingindo o Limite',
  'subs.keys.limit.free':
    '**Plano gratuito** esgotado -> A API retorna 429 com os cabeçalhos X-RateLimit-Reset e Retry-After. O contador diário é zerado à meia-noite UTC.',
  'subs.keys.limit.paid':
    '**Saldo pago** esgotado -> A API retorna 402. Recarregue em [store.wyzie.io/topup](https://store.wyzie.io/topup) ou habilite a **recarga automática** no seu painel para reabastecer automaticamente quando o saldo cruzar um limite que você definir.',

  'subs.keys.faq.h2': 'Perguntas Frequentes',
  'subs.keys.faq.q1': 'Perdi minha chave. Posso obter uma nova?',
  'subs.keys.faq.a1':
    'Acesse [store.wyzie.io](https://store.wyzie.io) e use o fluxo "esqueci minha chave" com o e-mail cadastrado; reenviaremos sua chave existente.',
  'subs.keys.faq.q2': 'Posso usar uma chave em vários projetos?',
  'subs.keys.faq.a2':
    'Sim. Sua chave funciona em qualquer lugar onde você chamar a API.',
  'subs.keys.faq.q3': 'Minha chave vai expirar algum dia?',
  'subs.keys.faq.a3':
    'Não. Chaves gratuitas e pagas não têm prazo de validade. Chaves gratuitas têm limite diário; o saldo pago persiste até você utilizá-lo.',
  'subs.keys.faq.q4': 'A recarga automática é segura?',
  'subs.keys.faq.a4':
    'Você define um limite mensal de gastos. Nunca cobramos acima disso, e a desativação com um clique está em cada e-mail de confirmação e no seu painel.',

  // Proxy Intro Page
  'proxy.intro.title': 'Introdução ao Wyzie Proxy',
  'proxy.intro.note':
    'A versão de produção do Wyzie Subs não usa mais este proxy, usando em vez disso o [i6.shark](https://github.com/wyziedevs/i6.shark).',
  'proxy.intro.p1':
    'Wyzie Proxy é uma poderosa API de proxy que permite fazer requisições a qualquer site sem restrições de CORS ou outras. Como o Wyzie Proxy é feito com Nitro, pode ser hospedado em qualquer uma das seguintes plataformas: AWS Amplify, Azure, Cloudflare, Netlify, Stormkit, Vercel, Zeabur.',
  'proxy.intro.btn.hosting': 'Hospedagem',
  'proxy.intro.btn.check': 'Confira',

  // Proxy Hosting Page
  'proxy.hosting.title': 'Hospedando o Wyzie Proxy',
  'proxy.hosting.p1':
    'Compilar o Wyzie Proxy é mais fácil do que respirar, graças ao Nitro. Primeiro, clone o repositório do Wyzie Proxy usando:',
  'proxy.hosting.p2': 'Depois, instale todos os pacotes necessários com:',
  'proxy.hosting.p3':
    'Após todos os pacotes serem instalados, você pode compilar o proxy:',
  'proxy.hosting.p4':
    'A saída será gerada na pasta /.output/server. Se estiver fazendo deploy para o Cloudflare Workers, copie e cole o arquivo index.mjs no worker; caso contrário, você pode fazer o deploy dos arquivos normalmente.',

  // i6.shark Intro Page
  'i6shark.intro.title': 'Introdução ao i6.shark',
  'i6shark.intro.p1':
    'i6.shark é um servidor proxy IPv6 que permite fazer requisições HTTP a partir de endereços IPv6 gerados aleatoriamente em uma subnet /48. Este é o proxy que atualmente alimenta o Wyzie Subs em produção.',
  'i6shark.intro.p2':
    'Uma subnet /48 possui 1.208.925.819.614.629.174.706.176 (1,2 x 10^24) endereços IPv6, tornando praticamente impossível bloqueá-la por meio de banimento tradicional de IP. Usar uma única subnet significa que quem realmente quiser bloquear você pode bloquear o seu endereço ASN, então tenha cuidado com isso.',
  'i6shark.intro.btn.hosting': 'Hospedagem',
  'i6shark.intro.btn.github': 'GitHub',

  'i6shark.intro.features.h2': 'Recursos',
  'i6shark.intro.feature1':
    '**Geração Aleatória de IPv6**: Cria endereços IPv6 aleatórios a partir do seu prefixo /48 para cada requisição',
  'i6shark.intro.feature2':
    '**Suporte Completo a Métodos HTTP**: GET, POST, PUT, DELETE e todos os outros métodos HTTP',
  'i6shark.intro.feature3':
    '**Autenticação HMAC-SHA256**: Autenticação segura de chave de API usando tokens baseados em user-agent',
  'i6shark.intro.feature4':
    '**Gerenciamento Inteligente de Pool de IPs**: Rotação automática de IP com tamanho de pool configurável. Gerenciamento inteligente do ciclo de vida dos IPs. Contagem de requisições por IP. Limpeza de IPs não utilizados com base em limite de inatividade.',
  'i6shark.intro.feature5':
    '**Tratamento Avançado de Requisições**: Encaminhamento de cabeçalhos personalizados. Remoção de cabeçalhos Cloudflare e CDN. Suporte a múltiplos formatos de parâmetros de URL. Fallback opcional para o IP padrão do sistema.',
  'i6shark.intro.feature6':
    '**Lista de Permissões de Hosts**: Lista de permissões de domínio integrada para segurança (configurável no código)',
  'i6shark.intro.feature7':
    '**Manutenção Automática**: Limpeza periódica do pool de IPs. Validação e limpeza de subnet. Pool de conexões e otimização de keepalive.',
  'i6shark.intro.feature8':
    '**Alto Desempenho**: Tratamento de requisições concorrentes com pool de buffers. Timeouts e limites de conexão configuráveis. Gerenciamento eficiente de endereços IPv6.',
  'i6shark.intro.feature9':
    '**Modo de Depuração**: Registro detalhado para solução de problemas e monitoramento',

  'i6shark.intro.requirements.h2': 'Requisitos',
  'i6shark.intro.req1': 'Go 1.20 ou superior',
  'i6shark.intro.req2':
    'Sistema Linux/Unix com suporte a IPv6 (preferencialmente Ubuntu)',
  'i6shark.intro.req3':
    'Privilégios de root (para vinculação na porta 80 e manipulação de IPv6)',
  'i6shark.intro.req4':
    'Alocação de subnet IPv6 /48 do seu provedor de hospedagem',

  'i6shark.intro.providers.h2': 'Provedores de Hospedagem',
  'i6shark.intro.providers.p1':
    'Os seguintes provedores são conhecidos por oferecer subnets IPv6 /48:',

  // i6.shark Hosting Page
  'i6shark.hosting.title': 'Hospedando o i6.shark',
  'i6shark.hosting.p1':
    'Configurar o i6.shark requer um VPS com uma subnet IPv6 /48. Uma vez configurado, ele funciona de forma autônoma com manutenção mínima.',

  'i6shark.hosting.steps.h2': 'Passos',
  'i6shark.hosting.step1': 'Clone o repositório em /opt/i6.shark:',
  'i6shark.hosting.step2': 'Configure as constantes em src/consts.go:',
  'i6shark.hosting.step2.note':
    'Atualize SharedSecret, IPv6Prefix e Interface para corresponder ao seu servidor. As demais constantes de ajuste têm padrões razoáveis e normalmente não precisam de alterações.',
  'i6shark.hosting.step3': 'Compile a aplicação:',
  'i6shark.hosting.step4': 'Crie o serviço systemd:',
  'i6shark.hosting.step5': 'Habilite e inicie o serviço:',
  'i6shark.hosting.step5.check': 'Verifique o status:',
  'i6shark.hosting.post':
    'O servidor proxy agora será executado automaticamente na inicialização e se reiniciará caso trave.',

  'i6shark.hosting.daily.h2': 'Reinicialização Diária (Opcional)',
  'i6shark.hosting.daily.p':
    'Adicione um cron job para reiniciar o servidor diariamente em um horário aleatório:',

  'i6shark.hosting.auth.h2': 'Autenticação da API',
  'i6shark.hosting.auth.p':
    'Os tokens de API são gerados usando HMAC-SHA256 com uma chave secreta compartilhada. A entrada para a geração da chave é o cabeçalho user-agent. Veja a função validateAPIToken no código-fonte para detalhes de implementação.',

  // Plugins
  'plugins.common.required': 'Obrigatório',

  'plugins.index.intro':
    'O Wyzie Subs se integra diretamente aos aplicativos de mídia que você já usa. Cada plugin se comunica com o mesmo endpoint `https://sub.wyzie.io/search` e precisa de uma **chave de API Wyzie** gratuita. Pegue uma em [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.index.tbl.stremio.for':
    'Assistindo no Stremio no desktop, celular ou TV',
  'plugins.index.tbl.stremio.install':
    'Add-on hospedado: cole sua chave, clique em Instalar',
  'plugins.index.tbl.bazarr.for':
    'Bibliotecas do Plex, Jellyfin, Emby, Sonarr, Radarr',
  'plugins.index.tbl.bazarr.install':
    'Provedor pronto para uso na sua instância do Bazarr',
  'plugins.index.tbl.kodi.for': 'Kodi 19+, LibreELEC, CoreELEC',
  'plugins.index.tbl.kodi.install':
    'Instale a partir do zip ou do repositório Wyzie',
  'plugins.index.use.stremio':
    'Use o **Stremio** se você assiste dentro do aplicativo Stremio.',
  'plugins.index.use.bazarr':
    'Use o **Bazarr** se você usa Plex, Jellyfin ou Emby. O Bazarr baixa arquivos de legenda para o disco e seu servidor de mídia os reconhece automaticamente. Este também é o caminho recomendado para Plex e Jellyfin; não há um plugin nativo separado.',
  'plugins.index.use.kodi':
    'Use o **Kodi** para um serviço de legendas nativo do Kodi no Android TV, em um Raspberry Pi ou em um PC de home theater.',
  'plugins.index.shared.sources':
    '**Fontes:** OpenSubtitles, SubDL e Podnapisi, agregadas através do Wyzie.',
  'plugins.index.shared.matching':
    '**Correspondência:** o Wyzie é orientado por IDs do IMDB e TMDB mais temporada e episódio, então as correspondências são precisas tanto para filmes quanto para séries.',
  'plugins.index.shared.quota':
    '**Cota:** quando sua chave se esgota, o plugin exibe um aviso amigável com um link para [store.wyzie.io](https://store.wyzie.io) em vez de falhar silenciosamente. Recarregue ou assine e você estará de volta ao jogo.',
  'plugins.index.shared.languages':
    '**Idiomas:** mais de 100, selecionáveis por plugin.',
  'plugins.index.outro': 'Escolha sua plataforma acima para começar.',

  'plugins.stremio.intro':
    'Um add-on de legendas com instalação em um clique para o [Stremio](https://www.stremio.com/). Ele agrega OpenSubtitles, SubDL e Podnapisi através do Wyzie e funciona tanto para filmes quanto para séries, em todas as plataformas em que o Stremio roda.',
  'plugins.stremio.before':
    'Você precisa de uma chave de API Wyzie gratuita. Pegue uma em [store.wyzie.io/redeem](https://store.wyzie.io/redeem), ou compre uma chave Pro ou assine em [store.wyzie.io](https://store.wyzie.io/#plans).',
  'plugins.stremio.install.1':
    'Abra [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure).',
  'plugins.stremio.install.2': 'Cole sua **chave de API**.',
  'plugins.stremio.install.3':
    'Opcional: insira seus **idiomas** preferidos como códigos ISO 639-1, separados por vírgula (por exemplo `en,es,fr`). Deixe vazio para todos os idiomas.',
  'plugins.stremio.install.4':
    'Opcional: ative as legendas para **deficientes auditivos** se preferir.',
  'plugins.stremio.install.5':
    'Clique em **Instalar**. O Stremio abre e pede que você confirme; aceite e está pronto.',
  'plugins.stremio.install.after':
    'Sua chave e preferências são codificadas no add-on, então não há mais nada para configurar. Abra qualquer filme ou episódio e escolha uma legenda na lista.',
  'plugins.stremio.cfg.key.f': 'Chave de API',
  'plugins.stremio.cfg.key.d': 'Sua chave Wyzie. Obrigatória.',
  'plugins.stremio.cfg.langs.f': 'Idiomas',
  'plugins.stremio.cfg.langs.d':
    'Códigos ISO 639-1, separados por vírgula. Vazio significa todos os idiomas.',
  'plugins.stremio.cfg.hi.f': 'Deficientes auditivos',
  'plugins.stremio.cfg.hi.d':
    'Preferir legendas para deficientes auditivos quando disponíveis.',
  'plugins.stremio.cfg.note':
    'Para alterar qualquer uma dessas opções mais tarde, reabra [stremio.wyzie.io/configure](https://stremio.wyzie.io/configure), ajuste e reinstale.',
  'plugins.stremio.local':
    'Em seguida, abra `http://127.0.0.1:7000/configure`, cole sua chave e instale no Stremio.',
  'plugins.stremio.quota':
    'Se sua chave atingir o limite, o add-on mostra uma única entrada de legenda com um link para [store.wyzie.io](https://store.wyzie.io) para que você possa recarregar ou assinar. Assim que fizer isso, as legendas retornam imediatamente.',
  'plugins.stremio.ts.none':
    '**Nenhuma legenda aparece.** Certifique-se de que o título tenha um ID do IMDB no Stremio (a maioria dos itens do catálogo tem) e que os idiomas escolhidos realmente tenham legendas para aquele título. Tente limpar o filtro de idioma para ver tudo.',
  'plugins.stremio.ts.key':
    '**Chave inválida, ou nada carrega.** Reabra a página de configuração e cole sua chave novamente; um espaço perdido a quebra. Confirme que a chave funciona em [store.wyzie.io/dashboard](https://store.wyzie.io/dashboard).',
  'plugins.stremio.ts.episode':
    '**Episódio de série não corresponde.** O Wyzie corresponde por temporada e episódio; certifique-se de que o Stremio esteja reproduzindo a entrada de episódio correta, não uma página genérica da série.',

  'plugins.bazarr.intro':
    'O [Bazarr](https://www.bazarr.media/) gerencia legendas para **Plex, Jellyfin, Emby, Sonarr e Radarr** em um só lugar. Adicionar o Wyzie como provedor dá a todos esses servidores acesso ao OpenSubtitles, SubDL e Podnapisi através de uma única chave.',
  'plugins.bazarr.note':
    'Esta é a maneira recomendada de usar o Wyzie com Plex e Jellyfin. O Bazarr baixa arquivos de legenda ao lado da sua mídia, e seu servidor os reconhece automaticamente, então nenhum plugin nativo separado é necessário.',
  'plugins.bazarr.before':
    'Pegue uma chave de API Wyzie gratuita em [store.wyzie.io/redeem](https://store.wyzie.io/redeem) e tenha acesso aos arquivos de instalação do seu Bazarr (caminho típico do Docker: `/opt/bazarr/bazarr/`).',
  'plugins.bazarr.install.1':
    'Copie `wyzie.py` para `bazarr/subliminal_patch/providers/wyzie.py`.',
  'plugins.bazarr.install.2':
    'Edite `bazarr/subliminal_patch/extensions.py` e adicione `wyzie` em **ambos** `provider_registry` e `provider_manager`.',
  'plugins.bazarr.install.3':
    'Edite `bazarr/list_subtitles.py` (ou `bazarr/config.py`, dependendo da sua versão) para expor as configurações `api_key`, `prefer_hi` e `sources`. Copie o padrão de um provedor existente como `opensubtitlescom`.',
  'plugins.bazarr.install.4': 'Reinicie o Bazarr.',
  'plugins.bazarr.install.5':
    'Vá em **Configurações, Provedores, Wyzie**, cole sua chave de API e salve.',
  'plugins.bazarr.install.after':
    'Um pull request de primeira classe para incorporar esse provedor ao Bazarr está planejado. Até lá, é um arquivo pronto para uso que você adiciona à sua própria instalação.',
  'plugins.bazarr.cfg.key': 'Sua chave Wyzie. Obrigatória.',
  'plugins.bazarr.cfg.hi': 'Preferir legendas para deficientes auditivos.',
  'plugins.bazarr.cfg.sources':
    'Lista de provedores para consultar, separada por vírgula, ou `all`.',
  'plugins.bazarr.quota.402':
    '**402 ou 429** (saldo esgotado ou limite diário atingido): o Bazarr registra uma nota com um link para [store.wyzie.io](https://store.wyzie.io) e não retorna resultados, então ele recai de forma limpa nos seus outros provedores. Nada trava.',
  'plugins.bazarr.quota.401':
    '**401** (chave inválida): o Bazarr expõe um erro de autenticação para que você saiba que precisa reinserir a chave.',
  'plugins.bazarr.ts.missing':
    '**O Wyzie não aparece na lista de provedores.** Verifique novamente a etapa de instalação que edita `extensions.py`; a entrada deve estar tanto em `provider_registry` quanto em `provider_manager`, então reinicie o Bazarr.',
  'plugins.bazarr.ts.none':
    '**Nenhuma legenda encontrada.** Confirme que o item tem um ID do IMDB no Bazarr e que os idiomas que você habilitou têm legendas para ele. Só restrinja `sources` se for essa a sua intenção.',
  'plugins.bazarr.ts.settings':
    '**Campos de configuração ausentes.** A etapa de configurações não foi aplicada para a sua versão do Bazarr; compare com um bloco de configurações de um provedor funcional e reinicie.',

  'plugins.kodi.intro':
    'Um serviço de legendas para **Kodi 19+ (Matrix e posteriores)**, LibreELEC e CoreELEC. Ele usa o ponto de extensão padrão `xbmc.subtitle.module` do Kodi, então aparece onde quer que o Kodi procure por legendas.',
  'plugins.kodi.before':
    'Pegue uma chave de API Wyzie gratuita em [store.wyzie.io/redeem](https://store.wyzie.io/redeem).',
  'plugins.kodi.repo.intro':
    'Instalar o repositório uma vez permite que o Kodi **atualize automaticamente** o add-on para você.',
  'plugins.kodi.repo.1':
    'Baixe o instalador do repositório: [**repository.wyzie.zip**](https://kodi.wyzie.io/repository.wyzie.zip).',
  'plugins.kodi.repo.2':
    'No Kodi: **Configurações, Add-ons, Instalar de arquivo zip**, então escolha `repository.wyzie.zip`. Se o Kodi bloquear, habilite primeiro **Configurações, Sistema, Add-ons, Fontes desconhecidas**.',
  'plugins.kodi.repo.3':
    '**Configurações, Add-ons, Instalar de repositório, Wyzie Repository, Serviços de legendas, Wyzie Subs, Instalar.**',
  'plugins.kodi.repo.4':
    '**Configurações, Reprodutor, Idioma, Serviço de legendas padrão**, então selecione **Wyzie Subs**.',
  'plugins.kodi.repo.5':
    'Abra as configurações do add-on Wyzie Subs e cole sua **chave de API**.',
  'plugins.kodi.zip.intro':
    'Use isto se você preferir não adicionar o repositório. Observação: uma instalação por zip **não** atualiza automaticamente.',
  'plugins.kodi.zip.1':
    'Obtenha o zip do add-on: `service.subtitles.wyzie-<version>.zip`. Se você tiver o código-fonte, compacte a pasta `kodi/` para que o zip contenha `addon.xml` em sua raiz.',
  'plugins.kodi.zip.2':
    'No Kodi: **Configurações, Add-ons, Instalar de arquivo zip**, então escolha o zip. Se o Kodi bloquear, habilite primeiro **Configurações, Sistema, Add-ons, Fontes desconhecidas**.',
  'plugins.kodi.zip.3':
    '**Configurações, Reprodutor, Idioma, Serviço de legendas padrão**, então selecione **Wyzie Subs**.',
  'plugins.kodi.zip.4':
    'Abra as configurações do add-on Wyzie Subs e cole sua **chave de API**.',
  'plugins.kodi.cfg.key': 'Sua chave Wyzie. Obrigatória.',
  'plugins.kodi.cfg.hi': 'Preferir legendas para deficientes auditivos.',
  'plugins.kodi.cfg.langs':
    'Os idiomas são obtidos dos idiomas de legenda selecionados no Kodi e mapeados para ISO 639-1 automaticamente.',
  'plugins.kodi.matching.1':
    'Enquanto algo está sendo reproduzido, o Kodi expõe o número do IMDB, a temporada e o episódio. O add-on lê esses dados, consulta `sub.wyzie.io/search` e retorna as legendas correspondentes. Como o Wyzie é orientado por ID (IMDB e TMDB), as correspondências são precisas tanto para filmes quanto para séries.',
  'plugins.kodi.matching.2':
    '**A busca manual** atualmente mostra uma notificação e não faz nada, porque o Wyzie corresponde por IDs, não por títulos. Uma busca de título para ID está no roadmap. Por enquanto, deixe o Kodi buscar automaticamente durante a reprodução.',
  'plugins.kodi.quota':
    'Uma resposta 402 ou 429 exibe uma notificação toast do Kodi direcionando você para [store.wyzie.io](https://store.wyzie.io) para recarregar ou assinar.',
  'plugins.kodi.ts.notoffered':
    '**O Wyzie não é oferecido durante a reprodução.** Confirme que ele está definido como o **Serviço de legendas padrão** e que o item em reprodução tem um ID do IMDB.',
  'plugins.kodi.ts.key':
    '**Chave inválida.** Reabra as configurações do add-on e cole sua chave novamente.',
  'plugins.kodi.ts.episode':
    '**Nada para um episódio.** Certifique-se de que o Kodi tenha os metadados corretos de temporada e episódio para o arquivo; itens de biblioteca obtidos por scraper funcionam melhor.',
};

export default messages;
