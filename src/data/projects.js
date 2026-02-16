const projects = [
  {
    id: 1,
    slug: "deception",
    shortName: "Deception",
    title: "Can LLMs Persuade Humans with Deception?",
    shortDescription:
      "A large-scale empirical study on LLM deceptive persuasion strategies and their effects on user perceptions, presented at CHI 2026.",
    image: "/images/fig-deception-p1-1.png",
    tags: ["AI Safety", "HCI", "Deception"],
    period: "2024 - 2026",
    fullTitle:
      '"Can LLMs Persuade Humans with Deception?": From a Deceptive Strategy Taxonomy to a Large-Scale Empirical Study',
    authors: [
      { name: "Haein Yeo", highlight: true },
      { name: "Seungwan Jin" },
      { name: "Taehyung Noh" },
      { name: "Yejin Shin" },
      { name: "Sangyeon Kang" },
      { name: "Sangwoo Heo" },
      { name: "Jiwon Chung" },
      { name: "Hwarim Hyun" },
      { name: "Kyungsik Han", corresponding: true },
    ],
    venue: "CHI 2026",
    venueNote: null,
    abstract:
      "Beyond hallucinations, Large Language Models (LLMs) can craft deceptive arguments that erode users' critical thinking, posing a significant yet underexamined societal risk. To address this gap, we develop a taxonomy of eight deceptive persuasion strategies by integrating top-down rhetorical theory with a bottom-up analysis of 3,360 AI-generated messages by four LLM families and examining their effects on user perceptions. Through a large-scale user study (N=602) complemented by a think-aloud protocol, we found that participants were vulnerable to Information Manipulation and Uncertainty Exploitation, especially when a message contradicted their prior beliefs. Vulnerability was significantly higher for participants with low cognitive reflection, low topic knowledge, and low topic involvement. Qualitative analyses further revealed that participants were persuaded by the plausibility of an overall narrative even when they distrusted specific details, interpreting deceptive outputs as logically framed information that broadened their perspective.",
    projectType: "Research",
    links: {
      paper: "/papers/2026_CHI_Deception.pdf",
      doi: "https://doi.org/10.1145/3772318.3791188",
    },
    sections: [
      {
        title: "Taxonomy Development",
        content:
          "We develop a comprehensive taxonomy of eight deceptive persuasion strategies by integrating top-down rhetorical theory (Logos, Pathos, Ethos dimensions and Deception Theory) with a bottom-up, data-driven analysis. From 3,360 AI-generated deceptive arguments produced by four LLM families, human coders and LLM coders collaboratively identified and consolidated patterns, resulting in eight distinct strategies: Information Manipulation, Logical Fallacies, Topic Manipulation, Uncertainty Exploitation, Emotional Manipulation, Appeal to Social Norms, Manipulative Framing, and Authority Misuse.",
        image: "/images/fig-deception-p5-2.png",
        imageCaption:
          "Figure: Taxonomy development process integrating top-down theoretical framework with bottom-up data-driven discovery.",
      },
      {
        title: "User Study Design",
        content:
          "We conducted a large-scale user study with 602 participants to examine how deceptive persuasion strategies affect user perceptions and belief change. The study consisted of a pre-survey, main tasks involving AI-generated persuasive messages on 10 social topics, and a post-survey. Participants interacted with an AI Research Assistant chatbot and rated their agreement before and after exposure to deceptive arguments.",
        image: "/images/fig-deception-study.png",
        imageCaption:
          "Figure: User study interface showing (A) research consent form, (B) AI Research Assistant chatbot interaction, and (C) post-exposure survey.",
      },
      {
        title: "Key Findings",
        content:
          "Participants were particularly vulnerable to Information Manipulation and Uncertainty Exploitation strategies, especially when messages contradicted their prior beliefs. Vulnerability was significantly higher for participants with low cognitive reflection, low topic knowledge, and low topic involvement. Notably, participants were persuaded by the plausibility of an overall narrative even when they distrusted specific details.",
      },
    ],
    bibtex: `@inproceedings{yeo2026deception,
  author = {Yeo, Haein and Jin, Seungwan and Noh, Taehyung and Shin, Yejin and Kang, Sangyeon and Heo, Sangwoo and Chung, Jiwon and Hyun, Hwarim and Han, Kyungsik},
  title = {"Can LLMs Persuade Humans with Deception?": From a Deceptive Strategy Taxonomy to a Large-Scale Empirical Study},
  year = {2026},
  isbn = {979-8-4007-2278-3/26/04},
  doi = {10.1145/3772318.3791188},
  booktitle = {Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems},
  location = {Barcelona, Spain},
  series = {CHI '26}
}`,
    relatedPublications: [1],
  },
  {
    id: 2,
    slug: "triple",
    shortName: "TRIPLE",
    title: "TRIPLE: Theory-Driven LLM-based Personalization",
    shortDescription:
      "A novel framework integrating dual-process theory from social psychology into LLM-based user modeling for personalization. Published at AAAI 2026 (Oral).",
    image: "/images/fig-triple-p1-1.png",
    tags: ["NLP", "Personalization", "User Modeling"],
    period: "2024 - 2026",
    fullTitle:
      "TRIPLE: Theory-Driven Integration of Planned and Habitual Behaviors for LLM-based Personalization",
    authors: [
      { name: "Taehyung Noh" },
      { name: "Seungwan Jin" },
      { name: "Haein Yeo", highlight: true },
      { name: "Kyungsik Han", corresponding: true },
    ],
    venue: "AAAI 2026",
    venueNote: "Oral",
    abstract:
      "While large language model (LLM)-based user profiling offers significant potential for personalization, most existing approaches rely on empirical heuristics and lack grounding in the psychological mechanisms that drive human behavior. In this paper, we introduce TRIPLE (Theory-guided Reasoning for Intent and habIt Profiling with LLMs for pErsonalization), a novel framework that systematically integrates dual-process theory from social psychology into LLM-based user modeling. TRIPLE (1) constructs a habitual behavior profile by identifying repeated patterns over time to model automatic responses; (2) builds an intentional behavior profile by inferring user attitudes, subjective norms and perceived behavioral control based on the Theory of Planned Behavior (TPB); and (3) generates behavioral rationale that reveal the interaction between habitual and intentional processes to predict user behavior in context-specific situations.",
    projectType: "Research",
    links: {
      paper: "/papers/2026_AAAI_TRIPLE.pdf",
    },
    sections: [
      {
        title: "Motivation",
        content:
          "While recent LLM-based profiling methods have advanced transparency compared to traditional black-box models, they often generate unstructured summaries of past behavior without theoretical grounding. This limits their ability to explain the 'why' behind user actions. TRIPLE addresses this by integrating dual-process theory, distinguishing between habitual (automatic) and intentional (deliberate) behavioral processes.",
      },
      {
        title: "Framework",
        content:
          "TRIPLE processes user history into habitual and intentional profiles, which are then synthesized through behavioral rationale generation to produce personalized predictions. The framework constructs (1) habitual behavior profiles by identifying repeated patterns over time, (2) intentional behavior profiles by inferring attitudes, subjective norms, and perceived behavioral control based on the Theory of Planned Behavior, and (3) behavioral rationale that reveals the interaction between habitual and intentional processes.",
        image: "/images/fig-triple-framework.png",
        imageCaption:
          "Figure: Overview of TRIPLE framework, showing how user history is processed into habitual and intentional profiles.",
      },
      {
        title: "Results",
        content:
          "Evaluated on five personalization tasks from the LaMP benchmark using multiple open-source LLMs, TRIPLE consistently outperforms existing in-context learning methods, with especially pronounced gains on complex generative tasks such as headline and title generation. Qualitative analyses further demonstrate that the profiles and reasoning paths generated by TRIPLE provide interpretable and psychologically grounded explanations of user behavior.",
      },
    ],
    bibtex: `@inproceedings{noh2026triple,
  author = {Noh, Taehyung and Jin, Seungwan and Yeo, Haein and Han, Kyungsik},
  title = {TRIPLE: Theory-Driven Integration of Planned and Habitual Behaviors for LLM-based Personalization},
  year = {2026},
  booktitle = {Proceedings of the AAAI Conference on Artificial Intelligence},
  series = {AAAI '26}
}`,
    relatedPublications: [2, 3],
  },
  {
    id: 3,
    slug: "pado",
    shortName: "PADO",
    title: "PADO: Personality-induced Multi-Agents for Detecting OCEAN",
    shortDescription:
      "The first LLM-based multi-agent personality detection framework that compares contrasting perspectives to capture the relative nature of personality traits. Published at COLING 2025 (Oral).",
    image: "/images/fig-pado-p1-2.png",
    tags: ["NLP", "Multi-Agent", "Personality"],
    period: "2024 - 2025",
    fullTitle:
      "PADO: Personality-induced multiAgents for Detecting OCEAN in human-generated texts",
    authors: [
      { name: "Haein Yeo", highlight: true },
      { name: "Taehyung Noh" },
      { name: "Seungwan Jin" },
      { name: "Kyungsik Han", corresponding: true },
    ],
    venue: "COLING 2025",
    venueNote: "Oral, Top 7.9%",
    abstract:
      "As personality can be useful in many cases, such as better understanding people's underlying contexts or providing personalized services, research has long focused on modeling personality from data. However, the development of personality detection models faces challenges due to the inherent latent and relative characteristics of personality, as well as the lack of annotated datasets. To address these challenges, our research focuses on methods that effectively exploit the inherent knowledge of Large Language Models (LLMs). We propose a novel approach that compares contrasting perspectives to better capture the relative nature of personality traits. In this paper, we introduce PADO (Personality-induced multi-Agent framework for Detecting OCEAN of the Big Five personality traits), the first LLM-based multi-agent personality detection framework.",
    links: {
      paper: "/papers/2025_COLING_PADO.pdf",
      doi: "https://aclanthology.org/2025.coling-main.382/",
      code: "https://github.com/haaaein/PADO",
    },
    projectType: "Research",
    sections: [
      {
        title: "Motivation",
        content:
          "For latent and relative characteristics like personality, comparing different perspectives may be more effective than a single assessment approach. Direct assessment often struggles to capture the nuanced, relative nature of personality traits, while comparative assessment between contrasting viewpoints can better determine trait levels.",
      },
      {
        title: "Framework",
        content:
          "PADO employs personality-induced agents to analyze text from multiple perspectives, followed by a comparative judgment process to determine personality trait levels. The framework consists of three stages: (a) inducing personality traits in LLMs to create specialized agents for each OCEAN dimension, (b) generating psycholinguistic explanations from both high-induced and low-induced reasoners, and (c) comparative assessment by a judge agent that evaluates the contrasting explanations to make a final judgment.",
        image: "/images/fig-pado-p4-6.png",
        imageCaption:
          "Figure: Overview of PADO. For each personality trait, steps from (a) to (c) are performed: inducing personality in LLMs, generating psycholinguistic explanations, and comparative assessment.",
      },
      {
        title: "Results",
        content:
          "Experiments with various LLM models, from GPT-4o to LLaMA3-8B, demonstrate PADO's effectiveness and generalizability, especially with smaller parameter models. This approach offers a more nuanced, context-aware method for personality detection, potentially improving personalized services and insights into digital behavior.",
      },
    ],
    bibtex: `@inproceedings{yeo2025pado,
  author = {Yeo, Haein and Noh, Taehyeong and Jin, Seungwan and Han, Kyungsik},
  title = {PADO: Personality-induced multi-Agents for Detecting OCEAN in human-generated texts},
  year = {2025},
  url = {https://aclanthology.org/2025.coling-main.382/},
  booktitle = {Proceedings of the 31st International Conference on Computational Linguistics},
  pages = {5719--5736},
  location = {Abu Dhabi, UAE},
  series = {COLING 2025}
}`,
    relatedPublications: [5],
  },
  {
    id: 4,
    slug: "rcs-gpai",
    shortName: "RCS-GPAI",
    title: "General-Purpose AI Risk Management Framework",
    shortDescription:
      "A comprehensive risk management framework for General-Purpose AI, developed in collaboration with TTA and the Center for Trustworthy AI.",
    image: "/images/fig-gpai-p7-4.png",
    tags: ["Trustworthy AI", "Risk Management", "GPAI"],
    period: "Apr. 2024 - Dec. 2024",
    fullTitle:
      "Responsible Capability Scaling (RCS) of General-Purpose AI (GPAI)",
    authors: [
      { name: "Yejin Shin" },
      { name: "Sangyeon Kang" },
      { name: "Kyungsik Han", corresponding: true },
      { name: "Haein Yeo", highlight: true },
      { name: "Misun Joo" },
      { name: "Seungwan Jin" },
      { name: "Sohyun Park" },
      { name: "Junghyun Kim" },
    ],
    venue: null,
    venueNote: null,
    collaboration: "TTA (Telecommunications Technology Association), Center for Trustworthy AI",
    projectType: "Report",
    abstract:
      "As General-Purpose AI (GPAI) advances, managing the associated risks becomes increasingly critical. This report presents a comprehensive risk management framework for GPAI, developed in collaboration with TTA and the Center for Trustworthy AI under the Ministry of Science and ICT. The framework defines three alignment principles for GPAI behavior\u2014Primacy of Humanity, Persistence of Goal, and Preservation of Value (3P)\u2014and proposes a systematic risk classification with eight Key Risk Factors (KRFs). The methodology is grounded in ISO 31000:2018 and validated through comparative evaluation and application to actual AI systems.",
    links: {
      paper: "/papers/2025_GPAI_Framework.pdf",
    },
    sections: [
      {
        title: "Overview",
        content:
          "The rapid development of General-Purpose AI (GPAI) presents both transformative potential and significant risks across economic, social, environmental, and security domains. This project develops a comprehensive risk management framework, informed by international research trends and validated by global expert advisory panels including Prof. Stuart J. Russell (UC Berkeley) and Prof. Yoshua Bengio (University of Montreal).",
      },
      {
        title: "Risk Management Framework",
        content:
          "The framework introduces a cyclical process of risk management: Identify, Analyse, Evaluate, and Treat, supported by continuous Monitoring, Review, and Reporting. Three alignment principles (3P)\u2014Primacy of Humanity, Persistence of Goal, and Preservation of Value\u2014serve as the foundation for integrated risk management across all stages of GPAI development.",
      },
      {
        title: "Methodology",
        content:
          "The risk management methodology is grounded in ISO 31000:2018 standards. Eight Key Risk Factors (KRFs) are identified through systematic collection and deduplication of risk factors from existing classification systems. The framework includes comparative evaluation against existing risk management approaches to verify effectiveness, and practical application to actual AI systems to demonstrate validity.",
      },
    ],
    relatedPublications: [11],
  },
  {
    id: 6,
    slug: "mos",
    shortName: "MOS",
    title: "MOS: Explainable Recommender Systems",
    shortDescription:
      "Development of an LLM-based explanation generation methodology for explainable recommender systems and a decision-support dashboard for fashion experts.",
    image: "/images/fig-mos-1.png",
    tags: ["LLM", "Recommender Systems", "Explainability"],
    period: "May. 2022 - Present",
    fullTitle:
      "MOS: LLM-Based Explanation Generation for Explainable Fashion Recommender Systems",
    authors: [
      { name: "Haein Yeo", highlight: true },
      { name: "Taehyung Noh" },
      { name: "Kyungsik Han", corresponding: true },
    ],
    venue: "Fashion and Textiles",
    venueNote: "SCI(E) Q1, JCR IF = 3.7",
    projectType: "Research",
    abstract:
      "Recommender systems are widely used in the fashion domain, but their lack of transparency often hinders user trust and understanding. This project develops an LLM-based content-based explanation generation methodology that produces human-readable explanations for fashion recommendations. We design a comprehensive dashboard to support decision-making for fashion experts, bridging the gap between algorithmic recommendations and human interpretability.",
    links: {},
    sections: [
      {
        title: "Overview",
        content:
          "While recommendation algorithms achieve high accuracy, users often struggle to understand why specific items are recommended. This challenge is particularly pronounced in fashion, where personal preference, style compatibility, and contextual factors play critical roles. MOS addresses this by generating natural language explanations for fashion recommendations using Large Language Models.",
      },
      {
        title: "Method",
        content:
          "We develop an LLM-based content-based explanation generation approach that analyzes item attributes, user preferences, and contextual information to produce coherent and informative explanations. Additionally, a decision-support dashboard is designed to help fashion experts evaluate and refine recommendations with the aid of generated explanations.",
      },
      {
        title: "Recommendation Results",
        content:
          "Given a selected fashion image, the system generates recommendations using multiple algorithms and presents them side by side, allowing experts to compare and evaluate different recommendation strategies.",
        image: "/images/fig-mos-2.png",
        imageCaption:
          "Figure: Recommendation results comparison across different algorithms for a selected fashion image.",
      },
      {
        title: "User Study",
        content:
          "Through user studies examining perception and experience differences across recommendation domains, we investigate how LLM-generated explanations affect user satisfaction, trust, and decision-making quality in fashion recommender systems.",
      },
    ],
    relatedPublications: [4, 7, 9],
  },
];

export default projects;
