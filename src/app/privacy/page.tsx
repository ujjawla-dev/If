"use client";

import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { Shield, Lock, Eye, Users, Cloud, Server, FileText, ChevronRight } from 'lucide-react';

const PrivacyPage = () => {
  const sections = [
    {
      title: "Data Encryption & Security",
      icon: Lock,
      content: "All user data is encrypted at rest and in transit using industry-standard AES-256 encryption. Sensitive information such as living wills, medical preferences, and personal messages is securely stored using industry-standard encryption protocols (Salt integration & AES-256)."
    },
    {
      title: "Secure Cloud Infrastructure",
      icon: Cloud,
      content: "The platform is deployed on world-class cloud infrastructure (AWS/Azure). We utilize Amazon EC2 for secure computing, S3 for encrypted media storage (via secure pre-signed URLs), and RDS for robust relational database management. This ensures high availability (99.9% uptime), scalability, and security."
    },
    {
      title: "Structured Content Modules",
      icon: FileText,
      content: "We provide structured categories for organizing your digital legacy: About Me, My Life, Work Life, My Spouse, Children, Friends, Pets, Favorites, Spiritual Beliefs, Family Tree, Passing Away, Living Will, DNR, Journals, Letters to Loved Ones, Pictures, Audio, and Videos."
    },
    {
      title: "Access Control & Legacy Contacts",
      icon: Users,
      content: "Role-Based Access Control (RBAC) ensures designated family members have secure access only to specific parts of the platform. You can assign 'Legacy Contacts' who can access your content after your passing via multi-factor authentication for the nominated members."
    },
    {
      title: "AI-Powered Privacy & Tagging",
      icon: Shield,
      content: "Using AI-driven recommendations, the application guides users through documenting memories while ensuring they maintain control. Content can be tagged with themes and set to Public, Private, or Shared visibility to maintain the utmost privacy and care."
    },
    {
      title: "Continuous Security Monitoring",
      icon: Server,
      content: "We utilize automated CI/CD pipelines (via GitHub Actions) for continuous security testing and deployment. Our Express.js backend provides robust business logic, role-based access control, and secure file upload endpoints returning signed S3 URLs."
    }
  ];

  return (
    <div className="min-h-screen  text-white font-sans selection:bg-[#E6663E]/30">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-50 bg-[radial-gradient(circle_at_50%_0%,rgba(230,102,62,0.1),transparent_50%)]" />
      {/* <div className="fixed inset-0 -z-50 bg-[url('/bg.png')] opacity-20 bg-cover bg-fixed" /> */}
      
      <Navbar />

      <main className="relative z-10 pt-40 pb-20 px-6 sm:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E6663E] text-xs font-bold tracking-widest uppercase mb-4">
              <Shield className="w-3 h-3" />
              Secure & Private
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Privacy <span className="text-[#E6663E]">Policy</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We are committed to protecting your digital legacy with industry-leading security protocols and absolute transparency.
            </p>
          </div>

          {/* Document Info Card */}
          {/* <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 mb-12 backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/60 text-sm">Customer Name</span>
                    <span className="text-white font-medium text-sm">Christy Perdue</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/60 text-sm">Project Title</span>
                    <span className="text-white font-medium text-sm">Digital Legacy Platform</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/60 text-sm">Prepared By</span>
                    <span className="text-white font-medium text-sm">Techwagger Solutions</span>
                  </div>
                </div>
              </div>
              <div className="md:border-l md:border-white/10 md:pl-8">
                <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Document Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/60 text-sm">Date</span>
                    <span className="text-white font-medium text-sm">May 31, 2025</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/60 text-sm">Version</span>
                    <span className="text-white font-medium text-sm">1.1</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-white/60 text-sm">Status</span>
                    <span className="text-[#E6663E] font-medium text-sm uppercase">Active Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Project Vision / Goals Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E6663E]/10 flex items-center justify-center">
                <FileText className="w-4 h-4 text-[#E6663E]" />
              </div>
              Project Vision & Objectives
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
              <p className="text-white/70 leading-relaxed mb-6">
                Our mission is to help individuals preserve their life stories and articulate their final wishes in a guided and personal manner. This platform seeks to address the emotional uncertainty often faced by families by providing:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "User-friendly, accessible, and secure record-keeping",
                  "Meaningful and organized storytelling formats",
                  "Heartfelt legacy messaging for loved ones",
                  "Organized archive across 15+ life categories",
                  "A lasting digital keepsake of deep emotional value",
                  "Foster thoughtful conversations around legacy"
                ].map((goal, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                    <ChevronRight className="w-4 h-4 text-[#E6663E] mt-0.5 shrink-0" />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="grid grid-cols-1 gap-8 mb-16">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className="group relative bg-white/5 hover:bg-white/[0.08] border border-white/10 rounded-3xl p-8 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#E6663E]/10 group-hover:border-[#E6663E]/20 transition-all duration-500">
                    <section.icon className="w-6 h-6 text-[#E6663E]" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
