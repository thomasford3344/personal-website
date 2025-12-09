import { NextResponse } from "next/server";
import { title } from "process";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "thomasford3344@gmail.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:thomasford3344@gmail.com"
    },
    {
      type: "phone",
      label: "+1 (254) 262-5719",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+12542625719"
    },
    {
      type: "website",
      label: "www.thomasford.com",
      icon: "/images/icon/web-icon.svg",
      link: "https://thomas-fords.vercel.app"
    }
  ],
  socialItems: [
    {
      platform: "dribbble",
      icon: "/images/icon/dribble-icon.svg",
      link: "https://dribbble.com"
    },
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://linkedin.com/in/thomas-ford-7ab744393"
    },
    {
      platform: "facebook",
      icon: "/images/icon/facebook-icon.svg",
      link: "https://facebook.com"
    }
  ]
};


const educationData = {
  education: [
    {
      title: "B.Eng.: Computer Science - 2017",
      description: "Texas A&M University - Kingsville"
    }
  ],
  skills: [
    {
      name: "Teamwork & Communication",
      icon: "/images/home/education-skill/teamwork-icon.svg",
      rating: 5
    },
    {
      name: "Problem Solving",
      icon: "/images/home/education-skill/problem-solving-icon.svg",
      rating: 5
    },
    {
      name: "CI/CD",
      icon: "/images/home/education-skill/ci-cd-icon.svg",
      rating: 5
    },
    {
      name: "AWS",
      icon: "/images/home/education-skill/aws-icon.svg",
      rating: 4
    },
    {
      name: "Azure",
      icon: "/images/home/education-skill/azure-icon.svg",
      rating: 4
    },
    {
      name: "Google Cloud Platform",
      icon: "/images/home/education-skill/gcp-icon.svg",
      rating: 5
    },
    {
      name: "Git",
      icon: "/images/home/education-skill/git-icon.svg",
      rating: 5
    },
    {
      name: "GitHub",
      icon: "/images/home/education-skill/github-icon.svg",
      rating: 5
    },
    {
      name: "Bitbucket",
      icon: "/images/home/education-skill/bitbucket-icon.svg",
      rating: 5
    },
    {
      name: "Docker",
      icon: "/images/home/education-skill/docker-icon.svg",
      rating: 5
    },
    {
      name: "Terraform",
      icon: "/images/home/education-skill/terraform-icon.svg",
      rating: 5
    },
    {
      name: "Ansible",
      icon: "/images/home/education-skill/ansible-icon.svg",
      rating: 4
    },
    {
      name: "Kubernetes",
      icon: "/images/home/education-skill/kubernetes-icon.svg",
      rating: 5
    },
    {
      name: "Jenkins",
      icon: "/images/home/education-skill/jenkins-icon.svg",
      rating: 5
    },
    {
      name: "Grafana",
      icon: "/images/home/education-skill/grafana-icon.svg",
      rating: 5
    },
    {
      name: "Bash",
      icon: "/images/home/education-skill/bash-icon.svg",
      rating: 5
    },
    {
      name: "Powershell",
      icon: "/images/home/education-skill/powershell-icon.svg",
      rating: 5
    },
    {
      name: "Agile/Scrum",
      icon: "/images/home/education-skill/agile-scrum-icon.svg",
      rating: 5
    },
    {
      name: "Python",
      icon: "/images/home/education-skill/python-icon.svg",
      rating: 5
    },
    {
      name: "Java",
      icon: "/images/home/education-skill/java-icon.svg",
      rating: 4
    },
    {
      name: "Nodejs",
      icon: "/images/home/education-skill/nodejs-icon.svg",
      rating: 5
    }
  ]
}

const contactLinks = {
  socialLinks: [
    {
      title: "Dribble",
      href: "/"
    },
    {
      title: "Facebook",
      href: "/"
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/thomas-ford-7ab744393"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "thomasford3344@gmail.com",
      link: "mailto:thomasford3344@gmail.com"
    },
    {
      type: "phone",
      label: "+1 (254) 262-5719",
      link: "tel:+12542625719"
    }
  ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
