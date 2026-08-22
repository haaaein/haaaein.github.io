const publications = [
  {
    id: 12,
    title:
      "From Preferences to Values: Evaluating Latent User Understanding and Transfer in LLMs",
    authors: ["Taehyung Noh", "Haein Yeo", "Beejin Son", "Kyungsik Han"],
    venue:
      "ACM International Conference on Information and Knowledge Management (CIKM)",
    // venueNote: "Acceptance Rate 30.9%",
    month: "November",
    year: 2026,
    type: "Conference",
    award: null,
    links: {},
  },
  {
    id: 13,
    title:
      "TIGRIS: Integrating Policy Knowledge Graphs and Theory of Change for Institutionally Grounded Policy Impact Simulation",
    authors: ["Haein Yeo*", "Junghyun Kim*", "Beejin Son", "Kyungsik Han"],
    authorsNote: "* Equal contribution",
    venue:
      "Findings of the Association for Computational Linguistics: EMNLP",
    month: "October",
    year: 2026,
    type: "Conference",
    award: null,
    links: {},
  },
  {
    id: 1,
    title:
      '"Can LLMs Persuade Humans with Deception?": From a Deceptive Strategy Taxonomy to a Large-Scale Empirical Study',
    authors: [
      "Haein Yeo",
      "Seungwan Jin",
      "Taehyung Noh",
      "Yejin Shin",
      "Sangyeon Kang",
      "Sangwoo Heo",
      "Jiwon Chung",
      "Hwarim Hyun",
      "Kyungsik Han",
    ],
    venue:
      "ACM International Conference on Human Factors in Computing Systems (CHI)",
    // venueNote: "Acceptance Rate 25.3%",
    month: "April",
    year: 2026,
    type: "Conference",
    award: null,
    links: {
      pdf: "/papers/2026_CHI_Deception.pdf",
      slide:
        "https://astlyi.s3.ap-northeast-2.amazonaws.com/2026/2026_CHI_Can_LLMs_Persuade_Humans_with_Deception_Slides.pdf",
      video: "https://youtu.be/olPdxffw38Q",
      doi: "https://dl.acm.org/doi/10.1145/3772318.3791188",
    },
  },
  {
    id: 4,
    title:
      "LLM-Generated Content-Based Explanations for User Experience in Fashion Recommender Systems",
    authors: ["Haein Yeo", "Taehyung Noh", "Kyungsik Han"],
    venue: "Fashion and Textiles",
    venueNote: "SCI(E) Q1, JCR IF = 3.7",
    month: "March",
    year: 2026,
    type: "Journal",
    award: null,
    links: {
      pdf: "/papers/2025_FnT_Explanation.pdf",
      doi: "https://link.springer.com/article/10.1186/s40691-026-00464-z",
    },
  },
  {
    id: 2,
    title:
      "TRIPLE: Theory-Driven Integration of Planned and Habitual Behaviors for LLM-based Personalization",
    authors: ["Taehyung Noh", "Seungwan Jin", "Haein Yeo", "Kyungsik Han"],
    venue: "The Association for the Advancement of Artificial Intelligence (AAAI)",
    venueNote: "Oral, Top 4.4%",
    // venueNote (original): "Oral, Top 4.4% Oral Acceptance Rate",
    month: "January",
    year: 2026,
    type: "Conference",
    award: null,
    links: {
      pdf: "/papers/2026_AAAI_TRIPLE.pdf",
      poster:
        "https://astlyi.s3.ap-northeast-2.amazonaws.com/2026/2026_TRIPLE_AAAI_Poster.pdf",
      slide:
        "https://astlyi.s3.ap-northeast-2.amazonaws.com/2026/2026_TRIPLE_AAAI_Slides.pdf",
      video: "https://www.youtube.com/watch?v=96bo422tDp4",
      doi: "https://doi.org/10.1609/aaai.v40i21.38818",
    },
  },
  {
    id: 3,
    title:
      "Externalizing Social-Cognitive Structures for User Modeling: Toward Theory-Driven Profiling with LLMs",
    authors: ["Taehyung Noh", "Seungwan Jin", "Haein Yeo", "Kyungsik Han"],
    venue:
      "ACM International Conference on Information and Knowledge Management (CIKM)",
    // venueNote: "Acceptance Rate 30.6%",
    month: "November",
    year: 2025,
    type: "Conference",
    award: null,
    links: {
      pdf: "/papers/2025_CIKM_TRIPLE.pdf",
      poster:
        "https://astlyi.s3.ap-northeast-2.amazonaws.com/2025/2025_CIKM_Poster.pdf",
      slide:
        "https://astlyi.s3.ap-northeast-2.amazonaws.com/2025/2025_CIKM_Slides.pdf",
      video: "https://www.youtube.com/watch?v=QW6qo4MOeL0",
      doi: "https://dl.acm.org/doi/10.1145/3746252.3760965",
    },
  },
  {
    id: 11,
    title:
      "Responsible Capability Scaling (RCS) of General Purpose AI (GPAI) Risk Management Framework",
    authors: [
      "Yejin Shin",
      "Sangyeon Kang",
      "Kyungsik Han",
      "Haein Yeo",
      "Misun Joo",
      "Seungwan Jin",
      "Sohyun Park",
      "Junghyun Kim",
    ],
    venue:
      "Telecommunications Technology Association (TTA), Center for Trustworthy AI",
    venueNote:
      "Kor: ISBN 979-11-89545-81-9, Eng: ISBN 979-11-89545-82-6",
    month: "February",
    year: 2025,
    type: "Report/Book",
    award: null,
    links: {
      pdf: "/papers/2025_GPAI_Framework.pdf",
    },
  },
  {
    id: 5,
    title:
      "PADO: Personality-induced multiAgents for Detecting OCEAN in human-generated texts",
    authors: ["Haein Yeo", "Taehyung Noh", "Seungwan Jin", "Kyungsik Han"],
    venue: "International Conference on Computational Linguistics (COLING)",
    venueNote: "Oral, Top 7.9%",
    month: "January",
    year: 2025,
    type: "Conference",
    award: null,
    links: {
      pdf: "/papers/2025_COLING_PADO.pdf",
      slide:
        "https://astlyi.s3.ap-northeast-2.amazonaws.com/2025/2025_COLING_PADO_Slide.pdf",
      video: "https://youtu.be/QTQoPADqg14",
      doi: "https://aclanthology.org/2025.coling-main.382/",
    },
  },
  {
    id: 6,
    title:
      "A Study on the Personal Fashion Preference in Social Media using Meta-path based Heterogeneous Graph Modeling",
    authors: ["Eunji Kim", "Haein Yeo", "Kyungsik Han"],
    venue: "KTCP (KIISE Transactions on Computing Practices), 31 (1)",
    venueNote: "Invited paper from KSC 2023",
    month: "January",
    year: 2025,
    type: "Journal",
    award: null,
    links: {
      pdf: "/papers/2025_KTCP_metapath.pdf",
      doi: "https://doi.org/10.5626/KTCP.2025.31.1.62",
    },
  },
  {
    id: 7,
    title:
      "A Study on User Perception and Experience Differences in Recommendation Results by Domain Expertise: The Case of Fashion Domains",
    authors: ["Taehyung Noh", "Haein Yeo", "Myungjin Kim", "Kyungsik Han"],
    venue:
      "ACM International Conference on Human Factors in Computing Systems (CHI LBW)",
    month: "April",
    year: 2023,
    type: "Conference",
    award: null,
    links: {
      pdf: "/papers/2023_CHI_LBW_UserPerception.pdf",
      slide:
        "https://astlyi.s3.ap-northeast-2.amazonaws.com/2023/CHI_LBW_UserPerception_Slide.pdf",
      video: "https://youtu.be/L2ZH-R64o3M",
      doi: "https://dl.acm.org/doi/abs/10.1145/3544549.3585641",
    },
  },
  {
    id: 8,
    title:
      "Using Deep Learning-Based Visual Hints to Mitigate Hallucinations in Large Language Model",
    authors: ["Taehyung Noh", "Haein Yeo", "Myungjin Kim", "Kyungsik Han"],
    venue: "The Proceedings of the Korea Software Congress (KSC)",
    month: "December",
    year: 2023,
    type: "Conference",
    award: null,
    links: {},
  },
  {
    id: 9,
    title:
      "An Approach to Generating Content-based Recommendation Explanations through a Large Language Model",
    authors: ["Haein Yeo", "Taehyung Noh", "Kyungsik Han"],
    venue: "The Proceedings of the Korea Software Congress (KSC)",
    month: "December",
    year: 2023,
    type: "Conference",
    award: null,
    links: {},
  },
  {
    id: 10,
    title:
      "A Study on the Personal Fashion Preference in Social Media using Meta-path based Heterogeneous Graph Modeling",
    authors: ["Eunji Kim", "Haein Yeo", "Kyungsik Han"],
    venue: "The Proceedings of the Korea Software Congress (KSC)",
    month: "December",
    year: 2023,
    type: "Conference",
    award: "Best Presentation Award",
    links: {},
  },
];

export default publications;
