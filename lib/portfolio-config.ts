export interface PortfolioConfig {
  personal: {
    name: string
    tagline: string
    email: string
    phone?: string
    location?: string
  }
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    website?: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    ctaButtons: {
      primary: { text: string; href: string }
      secondary: { text: string; href: string }
    }
  }
  certifications: {
    title: string
    items: Array<{
      id: string
      title: string
      issuer: string
      date?: string
      icon?: string
      link?: string
    }>
  }
  projects: {
    title: string
    items: Array<{
      id: string
      title: string
      description: string
      techStack: string[]
      image?: string
      demoLink?: string
      githubLink?: string
      featured?: boolean
    }>
  }
  contact: {
    title: string
    description: string
    formFields: {
      name: { label: string; placeholder: string }
      email: { label: string; placeholder: string }
      message: { label: string; placeholder: string }
    }
  }
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Praneeth Varma Kopperla",
    tagline: "Software Developer & Problem Solver",
    email: "praneethvarmakopperla@gmail.com",
    phone: "+91 9112345699",
    location: "Andhra Pradesh, India",
  },
  social: {
    github: "https://github.com/pvk-96",
    linkedin: "https://linkedin.com/in/praneeth-varma-kopperla",
    twitter: "https://x.com/PraneethVarma_K",
    website: "https://pvk.net.in",
  },
  hero: {
    title: "Developer & Learner",
    subtitle: "Aspiring Developer | Tech Enthusiast | Lifelong Learner",
    description:
      "Showcasing my certifications, projects, and journey in technology as I grow into a skilled developer.",
    ctaButtons: {
      primary: { text: "View Projects", href: "#projects" },
      secondary: { text: "Contact Me", href: "#contact" },
    },
  },
  certifications: {
    title: "Certifications & Achievements",
    items: [
      {
        id: "aws-certified",
        title: "AWS Academy Graduate",
        issuer: "Amazon Web Services",
        date: "2025",
        //fileUrl: "public/Certificates/AWS-cloud.pdf",
      },
      {
        id: "Internship",
        title: "Internship on Artifical Intelligence",
        issuer: "Pantech Solutions",
        date: "2025",
        //imageUrl: "public/Certificates/AIintern.jpeg",
      },
      {
        id: "Be10X",
        title: "AI Tools Workshop",
        issuer: "Be10X",
        date: "2025",
        //fileUrl: "public/Certificates/be10x.pdf",
      },
      {
        id: "AI-ML BootCamp",
        title: "Build an AI that sees Boot Camp",
        issuer: "DevTown",
        date: "2025",
        //fileUrl: "public/Certificates/AI-ML.pdf",
      },
      {
        id: "Anthropic Academy",
        title: "Anthropic Academy Courses",
        issuer: "Anthropic",
        date: "2025",
        //certificates: [
          //{ name: "Introduction to MCP", fileUrl: "public/Certificates/Anthropic/Anthropic-1.pdf" },
          //{ name: "MCP Advanced", fileUrl: "public/Certificates/Anthropic/Anthropic-2.pdf" },
          //{ name: "AI Fluency: Framework & Foundations", fileUrl: "public/Certificates/Anthropic/Anthropic-3.pdf" },
          //{ name: "Claude with Anthropic API", fileUrl: "public/Certificates/Anthropic/Anthropic-4.pdf" },
          //{ name: "Claude with Amazon Bedrock", fileUrl: "public/Certificates/Anthropic/Anthropic-5.pdf" },
          //{ name: "Claude Code in Action", fileUrl: "public/Certificates/Anthropic/Anthropic-6.pdf" },
          //{ name: "Claude with Google Vertex AI", fileUrl: "public/Certificates/Anthropic/Anthropic-7.pdf" },
        //]
      }
      
    ],
  },
  projects: {
    title: "Featured Projects",
    items: [
      {
        id: "VaultLocker",
        title: "VaultLocker",
        description:
          "A Python based application that allows users to store their passwords in a secure manner.",
        techStack: ["Python"],
        featured: true,
        githubLink: "https://github.com/pvk-96/VaultLocker",
      },
      {
        id: "TaskPilot",
        title: "TaskPilot",
        description:
          "A Python based application that allows users to create, manage and track their tasks from their command line.",
        techStack: ["Python"],
        featured: true,
        githubLink: "https://github.com/pvk-96/TaskPilot",
      },
      {
        id: "Linux-Sys-Health",
        title: "Linux-Sys-Health",
        description:
          "A Bash Script based application that allows users to monitor the health of their Linux system.",
        techStack: ["Bash"],
        featured: true,
        githubLink: "https://github.com/pvk-96/Linux-Sys-Health",
      },
      {
        id: "KeySprint",
        title: "KeySprint",
        description:
          "A Python based application that allows users to type faster by providing them with a timer and a score.",
        techStack: ["Python"],
        featured: true,
        githubLink: "https://github.com/pvk-96/KeySprint",
      },
    ],
  },
  contact: {
    title: "Let's Work Together",
    description: "I'm always interested in new opportunities and exciting projects. Feel free to reach out!\
     This feature is not available yet, but you can contact me on my email. Sorry for the Inconvinence",
    formFields: {
      name: { label: "Name", placeholder: "Your Name" },
      email: { label: "Email", placeholder: "Your Email" },
      message: { label: "Message", placeholder: "This Feature is not available yet, but you can contact me on my email." },
    },
  },
}
