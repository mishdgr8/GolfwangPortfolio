
import { PortfolioItem } from './types';

export const portfolioData: PortfolioItem[] = [
  // MEDIUM RESEARCH ARTICLES (Long-form)
  {
    id: 'medium-btcfi',
    type: 'article',
    title: 'BTCfi is growing at an unprecedented rate',
    excerpt: 'An exploration into the burgeoning Bitcoin DeFi ecosystem and why BTC is finally becoming a productive asset.',
    fullContent: 'Bitcoin is no longer just "digital gold." With the advent of Ordinals, Runes, and Layer 2 solutions like Union, the BTCfi ecosystem is expanding at a rate that mirrors the early days of DeFi on Ethereum. This research article breaks down the core protocols driving this growth.',
    date: 'Dec 12, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1000',
    metrics: [{ label: 'Reads', value: '18.4K' }, { label: 'Claps', value: '5.2K' }],
    externalLink: 'https://medium.com/@golfwang',
    tags: ['BTCfi', 'DeFi', 'Bitcoin']
  },
  {
    id: 'medium-unichain',
    type: 'article',
    title: 'Interacting with Unichain’s Layer 2 Testnet',
    excerpt: 'A technical guide on navigating the new Uniswap-native L2, focusing on cross-chain swaps.',
    fullContent: 'Unichain represents a paradigm shift for Uniswap, moving from an application to a sovereign infrastructure layer. This guide walks you through setting up your wallet for the testnet.',
    date: 'Nov 20, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
    metrics: [{ label: 'Reads', value: '12.1K' }, { label: 'Claps', value: '3.8K' }],
    externalLink: 'https://medium.com/@golfwang',
    tags: ['Unichain', 'L2', 'Uniswap']
  },
  {
    id: 'medium-sui',
    type: 'article',
    title: 'Why is Sui the fastest-growing L1 right now?',
    excerpt: 'Deep dive into Move-based performance and why the Sui ecosystem is attracting massive liquidity.',
    fullContent: 'Speed, scalability, and developer experience are the three pillars of the Sui network. By leveraging the Move programming language, Sui allows for object-centric data models.',
    date: 'Oct 15, 2025',
    imageUrl: 'https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&q=80&w=1000',
    metrics: [{ label: 'Reads', value: '22.7K' }, { label: 'Claps', value: '8.4K' }],
    externalLink: 'https://medium.com/@golfwang',
    tags: ['Sui', 'L1', 'Move']
  },

  // TWEET THREADS (sorted dynamically by views in Home.tsx)

  {
    id: "1958416098618941551",
    type: "tweet",
    title: "Union bot/Sybil detection FAQ thread",
    excerpt:
      "FAQ-style thread on bot/Sybil detection for @union_build, emphasizing pattern recognition and clusters.",
    fullContent:
      "FAQ-style thread addressing common questions about bot/Sybil detection on @union_build, emphasizing pattern recognition, clusters, and the inevitability of some real users being affected as collateral. Includes a disclaimer that this is personal experience, not official team advice.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "13,376" },
      { label: "Likes", value: "108" },
      { label: "Reposts", value: "14" },
      { label: "Quotes", value: "2" },
      { label: "Replies", value: "72" },
      { label: "Bookmarks", value: "10" },
    ],
    externalLink: "https://x.com/i/web/status/1958416098618941551",
    tags: ["Union", "Sybil", "Bots", "Community"],
  },
  {
    id: "1958135952284508585",
    type: "tweet",
    title: "Union Sybil infiltration follow-up",
    excerpt:
      "Follow-up highlighting heavy bot infiltration on @union_build Level 7 and urging patience on detection.",
    fullContent:
      "Follow-up to a Sybil exposé thread, highlighting how even Level 7 on @union_build is heavily infiltrated by bots (less than 30% real users out of 38k+). Urges the team to take time with detection and supports them.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "30,463" },
      { label: "Likes", value: "314" },
      { label: "Reposts", value: "39" },
      { label: "Quotes", value: "26" },
      { label: "Replies", value: "203" },
      { label: "Bookmarks", value: "24" },
    ],
    externalLink: "https://x.com/i/web/status/1958135952284508585",
    tags: ["Union", "Sybil", "Bots", "Airdrop"],
  },
  {
    id: "1957813079514792132",
    type: "tweet",
    title: "Union testnet leaderboard Sybil exposé",
    excerpt:
      "Long thread identifying 8,000+ Sybil accounts on @union_build testnet leaderboard and calling for action.",
    fullContent:
      "Long thread exposing thousands of fake/Sybil accounts on @union_build testnet leaderboard (over 8,000 identified). Details markers like naming patterns, recent creation, and low activity. Calls for team action to ensure fair airdrops.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "84,882" },
      { label: "Likes", value: "555" },
      { label: "Reposts", value: "41" },
      { label: "Quotes", value: "51" },
      { label: "Replies", value: "260" },
      { label: "Bookmarks", value: "51" },
    ],
    externalLink: "https://x.com/i/web/status/1957813079514792132",
    tags: ["Union", "Sybil", "Bots", "Testnet", "Airdrop"],
  },
  {
    id: "1952414578408649022",
    type: "tweet",
    title: "Union testnet airdrop allocation model",
    excerpt:
      "Speculative model estimating airdrop rewards using loyalty multipliers by level and token allocation assumptions.",
    fullContent:
      "Speculative model for @union_build testnet airdrop allocation, factoring loyalty multipliers by level (e.g., Level 10: 4x). Calculates potential rewards based on XP distribution and 5–10% token allocation from 10B supply. Credits dashboard data source.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "2,650" },
      { label: "Likes", value: "46" },
      { label: "Reposts", value: "6" },
      { label: "Quotes", value: "1" },
      { label: "Replies", value: "48" },
      { label: "Bookmarks", value: "2" },
    ],
    externalLink: "https://x.com/i/web/status/1952414578408649022",
    tags: ["Union", "Airdrop", "Tokenomics", "Testnet", "On-chain"],
  },
  {
    id: "1953888983840161813",
    type: "tweet",
    title: "Navigating KaitoAI after updates",
    excerpt:
      "Guidance on adapting to KaitoAI changes: focus on passion, avoid low-quality content, and build onchain footprints.",
    fullContent:
      "Guide on navigating @KaitoAI updates post-changes. Advises focusing on passion over farming, using quotes/replies strategically, avoiding low-quality/automated content, building onchain footprints, and researching open ambassador programs.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "555" },
      { label: "Likes", value: "30" },
      { label: "Reposts", value: "9" },
      { label: "Quotes", value: "0" },
      { label: "Replies", value: "20" },
      { label: "Bookmarks", value: "6" },
    ],
    externalLink: "https://x.com/i/web/status/1953888983840161813",
    tags: ["KaitoAI", "Strategy", "Content", "Community"],
  },
  {
    id: "1953157846842908777",
    type: "tweet",
    title: "Union mainnet imminent on-chain/GitHub analysis",
    excerpt:
      "Speculative analysis pointing to a migration script and parameters that suggest @union_build mainnet is close.",
    fullContent:
      "Speculative onchain analysis suggesting @union_build mainnet imminent. Details GitHub migration script confirming $U token supply (10B), governance parameters, and foundation multisig. Tags team for verification.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "6,760" },
      { label: "Likes", value: "117" },
      { label: "Reposts", value: "19" },
      { label: "Quotes", value: "8" },
      { label: "Replies", value: "90" },
      { label: "Bookmarks", value: "4" },
    ],
    externalLink: "https://x.com/i/web/status/1953157846842908777",
    tags: ["Union", "Mainnet", "GitHub", "On-chain", "Tokenomics"],
  },
  {
    id: "1947228774896177422",
    type: "tweet",
    title: "Union Kaito leaderboard critique (KOL bias)",
    excerpt:
      "Explains why the Kaito leaderboard can favor influencers via multipliers, and suggests tactical engagement strategies.",
    fullContent:
      "Analysis of why @union_build Kaito leaderboard favors KOLs/influencers over small accounts due to multipliers (e.g., smart accounts, wallet holdings). Suggests strategies like quotes and smart interactions.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "4,468" },
      { label: "Likes", value: "85" },
      { label: "Reposts", value: "5" },
      { label: "Quotes", value: "7" },
      { label: "Replies", value: "56" },
      { label: "Bookmarks", value: "9" },
    ],
    externalLink: "https://x.com/i/web/status/1947228774896177422",
    tags: ["Union", "Kaito", "Leaderboard", "Community"],
  },
  {
    id: "1947688137230057770",
    type: "tweet",
    title: "Union token supply + migration script deep dive",
    excerpt:
      "Detailed GitHub analysis of $U supply (10B), migration script, staking resets, governance parameters, and multisig.",
    fullContent:
      "Detailed GitHub analysis confirming @union_build $U token supply (10B), mainnet migration script, governance parameters, staking resets, and foundation multisig. Tags team for verification.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "88,608" },
      { label: "Likes", value: "745" },
      { label: "Reposts", value: "76" },
      { label: "Quotes", value: "100" },
      { label: "Replies", value: "381" },
      { label: "Bookmarks", value: "55" },
    ],
    externalLink: "https://x.com/i/web/status/1947688137230057770",
    tags: ["Union", "Mainnet", "GitHub", "Tokenomics", "Governance"],
  },
  {
    id: "1946961411508174855",
    type: "tweet",
    title: "Top Union yapper strategy: TimHaldorsson",
    excerpt:
      "Breakdown of a low-volume, high-engagement posting strategy centered on marketing/Kaito with mid-CT reputation.",
    fullContent:
      "Breakdown of top @union_build yapper @TimHaldorsson's strategy: low-volume but high-engagement posts focused on marketing/Kaito, sporadic timing, and mid-CT reputation. Notes lack of tech depth or testnet use.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "4,512" },
      { label: "Likes", value: "53" },
      { label: "Reposts", value: "15" },
      { label: "Quotes", value: "1" },
      { label: "Replies", value: "25" },
      { label: "Bookmarks", value: "2" },
    ],
    externalLink: "https://x.com/i/web/status/1946961411508174855",
    tags: ["Union", "Community", "Kaito", "Creator Strategy"],
  },
  {
    id: "1946886829665292709",
    type: "tweet",
    title: "Top Union yapper strategy: Soch_Tweet",
    excerpt:
      "Breakdown of mid-output, high reply volume strategy with meme-style content and strong community reputation signals.",
    fullContent:
      "Breakdown of top @union_build yapper @Soch_Tweet's strategy: mid-output with high replies (mostly to own content), early riser timing, and community reputation. Notes non-technical, meme-style posts.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "1,509" },
      { label: "Likes", value: "53" },
      { label: "Reposts", value: "6" },
      { label: "Quotes", value: "0" },
      { label: "Replies", value: "39" },
      { label: "Bookmarks", value: "3" },
    ],
    externalLink: "https://x.com/i/web/status/1946886829665292709",
    tags: ["Union", "Community", "Creator Strategy"],
  },
  {
    id: "1946503210744832300",
    type: "tweet",
    title: "Top Union yapper strategy: winner_asd",
    excerpt:
      "Breakdown of a high-reply supportive strategy with occasional criticism and long-term consistency.",
    fullContent:
      "Breakdown of top @union_build yapper @winner_asd's strategy: high replies (mostly 'zkgm-coded'), hardcore support with occasional criticism, and spaced content. Notes long-term consistency across timeframes.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "4,225" },
      { label: "Likes", value: "82" },
      { label: "Reposts", value: "11" },
      { label: "Quotes", value: "4" },
      { label: "Replies", value: "65" },
      { label: "Bookmarks", value: "8" },
    ],
    externalLink: "https://x.com/i/web/status/1946503210744832300",
    tags: ["Union", "Community", "Creator Strategy"],
  },
  {
    id: "1946473307907477520",
    type: "tweet",
    title: "Top Union yapper strategy: sagorkhan09",
    excerpt:
      "Breakdown of high-volume repetitive posting concentrated in community spaces with low depth content.",
    fullContent:
      "Breakdown of top @union_build yapper @sagorkhan09's strategy: high-volume repetitive bullposting and 'zkgm' replies, all in community spaces. Notes low-depth content and mid-3-figure impressions.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "1,566" },
      { label: "Likes", value: "54" },
      { label: "Reposts", value: "11" },
      { label: "Quotes", value: "1" },
      { label: "Replies", value: "32" },
      { label: "Bookmarks", value: "4" },
    ],
    externalLink: "https://x.com/i/web/status/1946473307907477520",
    tags: ["Union", "Community", "Creator Strategy"],
  },
  {
    id: "1946550569633550720",
    type: "tweet",
    title: "Top Union yapper strategy: Alex_Houseof308",
    excerpt:
      "Breakdown of influencer-style posting with high own-replies, laid-back content, and peak-hour posting patterns.",
    fullContent:
      "Breakdown of top @union_build yapper @Alex_Houseof308's strategy: influencer-style with high own-replies, laid-back content, and peak-hour posting. Notes web2 pivot and high-4-figure impressions.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "1,286" },
      { label: "Likes", value: "56" },
      { label: "Reposts", value: "9" },
      { label: "Quotes", value: "0" },
      { label: "Replies", value: "33" },
      { label: "Bookmarks", value: "2" },
    ],
    externalLink: "https://x.com/i/web/status/1946550569633550720",
    tags: ["Union", "Community", "Creator Strategy"],
  },
  {
    id: "1946457156682690579",
    type: "tweet",
    title: "Series announcement: Top 100 Union yappers strategies",
    excerpt:
      "Announcement of a series analyzing top yappers’ strategies using metrics like posts, replies, and content style.",
    fullContent:
      "Announcement of series demystifying top 100 @union_build yappers' strategies, focusing on metrics like posts, replies, and content style. Aims to provide value for community adoption.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "10,394" },
      { label: "Likes", value: "76" },
      { label: "Reposts", value: "6" },
      { label: "Quotes", value: "2" },
      { label: "Replies", value: "72" },
      { label: "Bookmarks", value: "4" },
    ],
    externalLink: "https://x.com/i/web/status/1946457156682690579",
    tags: ["Union", "Community", "Series", "Creator Strategy"],
  },
  {
    id: "1933150991014060517",
    type: "tweet",
    title: "Sui ecosystem opportunity guide",
    excerpt:
      "Guide covering ecosystem tasks, staking, content creation, and notable NFTs across the Sui ecosystem.",
    fullContent:
      "Guide to @SuiNetwork ecosystem opportunities, including @ikadotxyz tasks, staking $WAL/$SUI, and @giverep content creation. Lists notable NFTs and shouts out community members.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "220" },
      { label: "Likes", value: "12" },
      { label: "Reposts", value: "3" },
      { label: "Quotes", value: "0" },
      { label: "Replies", value: "3" },
      { label: "Bookmarks", value: "1" },
    ],
    externalLink: "https://x.com/i/web/status/1933150991014060517",
    tags: ["Sui", "Ecosystem", "Airdrop", "Guide"],
  },
  {
    id: "1935839807369867698",
    type: "tweet",
    title: "Critique: Kaito yaps and post-TGE performance",
    excerpt:
      "Critique arguing yaps programs can correlate with poor post-TGE performance; calls for education and transparency.",
    fullContent:
      "Critique of @KaitoAI yaps program's impact on post-TGE token performance (e.g., $LOUD down 93%). Advocates for education, retention, and transparency over hype. Tags multiple projects.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "1,532" },
      { label: "Likes", value: "20" },
      { label: "Reposts", value: "5" },
      { label: "Quotes", value: "2" },
      { label: "Replies", value: "9" },
      { label: "Bookmarks", value: "3" },
    ],
    externalLink: "https://x.com/i/web/status/1935839807369867698",
    tags: ["KaitoAI", "Token", "Critique", "Community"],
  },
  {
    id: "1934237246581801183",
    type: "tweet",
    title: "Yupp AI funding + model overview summary",
    excerpt:
      "Summary of @yupp_ai: funding, mission as an AI aggregator, and learn-to-earn model with feedback loops.",
    fullContent:
      "Summary of @pankaj's thread on @yupp_ai funding ($33M from @a16zcrypto), mission as AI aggregator, and learn-to-earn model. Highlights multi-model responses and feedback system.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "2,841" },
      { label: "Likes", value: "22" },
      { label: "Reposts", value: "8" },
      { label: "Quotes", value: "1" },
      { label: "Replies", value: "4" },
      { label: "Bookmarks", value: "7" },
    ],
    externalLink: "https://x.com/i/web/status/1934237246581801183",
    tags: ["AI", "YuppAI", "Funding", "a16z", "Summary"],
  },
  {
    id: "1933919755506708973",
    type: "tweet",
    title: "iKADOT Q&A breakdown: zero-trust, MPC, dwallets",
    excerpt:
      "Breakdown of a multi-part Q&A explaining iKADOT architecture and token utility in simplified terms.",
    fullContent:
      "Breakdown of @d3h3d_'s 12-part Q&A on @ikadotxyz, covering zero-trust, MPC, dwallets, token utility, and network integration. Explains technical concepts simply.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "2,672" },
      { label: "Likes", value: "52" },
      { label: "Reposts", value: "10" },
      { label: "Quotes", value: "1" },
      { label: "Replies", value: "15" },
      { label: "Bookmarks", value: "6" },
    ],
    externalLink: "https://x.com/i/web/status/1933919755506708973",
    tags: ["iKADOT", "MPC", "Security", "Guide", "Technical"],
  },
  {
    id: "1943293860739698833",
    type: "tweet",
    title: "KaitoAI rules inspired by Haldorssons",
    excerpt:
      "Shares rules for succeeding: genuine projects, smart content, early participation, and value provision.",
    fullContent:
      "Shares @KaitoAI rules inspired by Haldorssons: focus on genuine projects, smart content, early participation, and value provision.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "303" },
      { label: "Likes", value: "20" },
      { label: "Reposts", value: "1" },
      { label: "Quotes", value: "1" },
      { label: "Replies", value: "7" },
      { label: "Bookmarks", value: "1" },
    ],
    externalLink: "https://x.com/i/web/status/1943293860739698833",
    tags: ["KaitoAI", "Rules", "Strategy"],
  },
  {
    id: "1943644263272665419",
    type: "tweet",
    title: "Liquidity-based vs action-based leaderboards comparison",
    excerpt:
      "Compares liquidity-based and action-based systems and argues for a hybrid approach for fairness.",
    fullContent:
      "Compares liquidity-based (@MitosisOrg) vs. action-based (@union_build) leaderboards. Advocates hybrid for fairness and inclusion.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "185" },
      { label: "Likes", value: "19" },
      { label: "Reposts", value: "2" },
      { label: "Quotes", value: "0" },
      { label: "Replies", value: "4" },
      { label: "Bookmarks", value: "0" },
    ],
    externalLink: "https://x.com/i/web/status/1943644263272665419",
    tags: ["Leaderboards", "Incentives", "Union", "Mitosis"],
  },
  {
    id: "1943928204097434010",
    type: "tweet",
    title: "Union anti-Sybil warning: device fingerprinting",
    excerpt:
      "Warns about anti-Sybil measures and advises against multi-account farming.",
    fullContent:
      "Warns of @union_build anti-Sybil measures (device fingerprinting, Kaito linking). Advises against multi-account farming.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "2,017" },
      { label: "Likes", value: "45" },
      { label: "Reposts", value: "10" },
      { label: "Quotes", value: "0" },
      { label: "Replies", value: "22" },
      { label: "Bookmarks", value: "3" },
    ],
    externalLink: "https://x.com/i/web/status/1943928204097434010",
    tags: ["Union", "Sybil", "Security", "Kaito"],
  },
  {
    id: "1945414361100566796",
    type: "tweet",
    title: "Union BTCfi thesis: AuroBTC LST + bridge volume",
    excerpt:
      "Discusses Union’s BTCfi focus via AuroBTC LST, existing bridge volume, and composable BTCfi potential.",
    fullContent:
      "Details @union_build BTCfi focus via AuroBTC LST. Notes existing BTC bridge volume and potential for composable BTCfi.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "2,013" },
      { label: "Likes", value: "48" },
      { label: "Reposts", value: "11" },
      { label: "Quotes", value: "4" },
      { label: "Replies", value: "38" },
      { label: "Bookmarks", value: "6" },
    ],
    externalLink: "https://x.com/i/web/status/1945414361100566796",
    tags: ["Union", "BTCfi", "Bitcoin", "LST"],
  },
  {
    id: "1944478573747917294",
    type: "tweet",
    title: "FractionAI leaderboard climb strategy",
    excerpt:
      "Milestone post describing a rapid climb on the FractionAI leaderboard using replies/quotes and sharing tactics.",
    fullContent:
      "Milestone post on climbing @FractionAI_xyz leaderboard from 650 to 11 in 2 days via replies/quotes. Shares strategy.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "47,803" },
      { label: "Likes", value: "452" },
      { label: "Reposts", value: "173" },
      { label: "Quotes", value: "34" },
      { label: "Replies", value: "355" },
      { label: "Bookmarks", value: "11" },
    ],
    externalLink: "https://x.com/i/web/status/1944478573747917294",
    tags: ["FractionAI", "Leaderboard", "Strategy", "Growth"],
  },
  {
    id: "1943969164906946573",
    type: "tweet",
    title: "Satire: real testers vs Binance Alpha airdrop farmers",
    excerpt:
      "Satirical post criticizing airdrop expectations from Binance Alpha users and emphasizing real testers’ work.",
    fullContent:
      "Satirical post against @union_build airdrop to Binance Alpha users, emphasizing real testers' efforts.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "10,335" },
      { label: "Likes", value: "83" },
      { label: "Reposts", value: "13" },
      { label: "Quotes", value: "3" },
      { label: "Replies", value: "53" },
      { label: "Bookmarks", value: "2" },
    ],
    externalLink: "https://x.com/i/web/status/1943969164906946573",
    tags: ["Union", "Culture", "Satire", "Airdrop"],
  },
  {
    id: "1917152682004857023",
    type: "tweet",
    title: "iKADOT pre-mainnet tasks guide",
    excerpt:
      "Guide to tasks for potential airdrop: NFT staking, $SUI locking, and content contributions.",
    fullContent:
      "Guide to @ikadotxyz pre-mainnet tasks for potential airdrop. Includes NFT staking, $SUI locking, and @giverep content.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "4,625" },
      { label: "Likes", value: "50" },
      { label: "Reposts", value: "9" },
      { label: "Quotes", value: "1" },
      { label: "Replies", value: "17" },
      { label: "Bookmarks", value: "8" },
    ],
    externalLink: "https://x.com/i/web/status/1917152682004857023",
    tags: ["iKADOT", "Airdrop", "Guide", "Sui"],
  },
  {
    id: "1945491546813477011",
    type: "tweet",
    title: "Union Kaito success question + metric analysis",
    excerpt:
      "Questions Union’s Kaito rankings expansion and asks for team input based on observed metrics.",
    fullContent:
      "Questions @union_build Kaito success given low rankings. Analyzes metrics and seeks team input on expansion.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "601" },
      { label: "Likes", value: "30" },
      { label: "Reposts", value: "4" },
      { label: "Quotes", value: "0" },
      { label: "Replies", value: "23" },
      { label: "Bookmarks", value: "0" },
    ],
    externalLink: "https://x.com/i/web/status/1945491546813477011",
    tags: ["Union", "Kaito", "Metrics", "Community"],
  },
  {
    id: "1853702301573095831",
    type: "tweet",
    title: "ShioLabs Early Participant Program guide",
    excerpt:
      "Guide for potential airdrop participation involving MEV protection toggle and DeFi interactions.",
    fullContent:
      "Guide to @ShioLabs Early Participant Program for potential airdrop. Involves MEV protection toggle and DeFi interactions.",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "3,258" },
      { label: "Likes", value: "36" },
      { label: "Reposts", value: "8" },
      { label: "Quotes", value: "2" },
      { label: "Replies", value: "3" },
      { label: "Bookmarks", value: "12" },
    ],
    externalLink: "https://x.com/i/web/status/1853702301573095831",
    tags: ["ShioLabs", "Airdrop", "Guide", "DeFi"],
  },
  {
    id: "1845451935786180709",
    type: "tweet",
    title: "Jupiter Exchange iOS app review",
    excerpt:
      "Review of Jupiter iOS app experience: walkthrough, UI/speed impressions, and security suggestions.",
    fullContent:
      "Review of @JupiterExchange iOS app: walkthrough, thoughts on UI/speed, and suggestions (e.g., security for keys/phrases).",
    date: "Unknown (metrics fetched Jan 16, 2026)",
    metrics: [
      { label: "Views", value: "9,179" },
      { label: "Likes", value: "56" },
      { label: "Reposts", value: "11" },
      { label: "Quotes", value: "1" },
      { label: "Replies", value: "8" },
      { label: "Bookmarks", value: "6" },
    ],
    externalLink: "https://x.com/i/web/status/1845451935786180709",
    tags: ["Jupiter", "Solana", "Mobile", "Review", "DEX"],
  },
];



