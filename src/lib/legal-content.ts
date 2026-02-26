export type LegalLocale = "en" | "ko";
export type LegalDocKey = "privacy" | "terms" | "cookies";

type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  kicker: string;
  title: string;
  lastUpdatedLabel: string;
  contentsLabel: string;
  intro: string[];
  sections: LegalSection[];
  contactTitle: string;
  contact: {
    company: string;
    website: string;
    email: string;
  };
  notice: string;
};

const contact = {
  company: "ROA",
  website: "https://roa.global",
  email: "hello@roa.global",
};

const documents: Record<LegalLocale, Record<LegalDocKey, LegalDocument>> = {
  en: {
    privacy: {
      kicker: "Legal",
      title: "Privacy Policy",
      lastUpdatedLabel: "Last updated: February 26, 2026",
      contentsLabel: "Contents",
      intro: [
        "This Privacy Policy explains how ROA collects, uses, shares, and protects personal information when you visit our website, contact us, or use our services.",
        "It also describes your choices and rights regarding your personal information, subject to applicable law.",
      ],
      sections: [
        {
          id: "scope",
          title: "1. Scope",
          paragraphs: [
            "This policy applies to personal information processed through the roa.global website, contact forms, sales conversations, and related service operations.",
            "If we process data on behalf of a customer as a service provider/processor, that processing is governed by our customer agreement and instructions.",
          ],
        },
        {
          id: "information-we-collect",
          title: "2. Information We Collect",
          paragraphs: [
            "We collect information you provide directly and information generated when you interact with our website or services.",
          ],
          bullets: [
            "Contact and business details, such as name, company, email address, phone number, and job title.",
            "Inquiry and communications data, including message contents, scheduling details, and email correspondence.",
            "Usage and device data, such as IP address, browser type, pages visited, timestamps, and referring URLs.",
            "Cookie and similar technology data used for site functionality, analytics, and performance measurement.",
            "Service-related business data that customers choose to connect or share with us, subject to contract terms.",
          ],
        },
        {
          id: "how-we-use",
          title: "3. How We Use Information",
          bullets: [
            "Provide, operate, maintain, and improve our services and website.",
            "Respond to inquiries, demos, support requests, and business communications.",
            "Analyze performance, diagnose issues, and secure our systems.",
            "Send service updates, administrative notices, and permitted marketing communications.",
            "Comply with legal obligations, enforce agreements, and protect rights and safety.",
          ],
        },
        {
          id: "legal-bases",
          title: "4. Legal Bases (Where Applicable)",
          paragraphs: [
            "For users in jurisdictions that require a legal basis for processing (such as the EEA/UK), we rely on one or more of the following: performance of a contract, legitimate interests, consent, and legal obligations.",
          ],
        },
        {
          id: "sharing",
          title: "5. Sharing and Disclosure",
          paragraphs: [
            "We do not sell personal information for money. We may share personal information with third parties only as needed to operate our business and services.",
          ],
          bullets: [
            "Vendors and service providers (for hosting, analytics, communications, CRM, and form processing).",
            "Professional advisors (legal, tax, audit) under confidentiality obligations.",
            "Authorities or other parties when required by law or to protect rights, security, or safety.",
            "A successor entity in connection with a merger, acquisition, financing, or asset transfer.",
          ],
        },
        {
          id: "cookies",
          title: "6. Cookies and Tracking Technologies",
          paragraphs: [
            "We use cookies and similar technologies to operate the site, understand traffic, and improve user experience. Depending on your location, you may be able to manage non-essential cookies through browser settings or consent tools we provide.",
          ],
        },
        {
          id: "retention",
          title: "7. Data Retention",
          paragraphs: [
            "We retain personal information for as long as reasonably necessary for the purposes described in this policy, including to provide services, maintain records, resolve disputes, enforce agreements, and comply with legal obligations.",
          ],
        },
        {
          id: "security",
          title: "8. Data Security",
          paragraphs: [
            "We use administrative, technical, and organizational measures designed to protect personal information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
          ],
        },
        {
          id: "rights",
          title: "9. Your Rights and Choices",
          paragraphs: [
            "Depending on your location, you may have rights to access, correct, delete, restrict, or object to certain processing, and to request a copy of your data. You may also opt out of marketing communications at any time.",
            "California residents may have additional rights under applicable state privacy laws, including rights to know, delete, and correct personal information, subject to exceptions.",
          ],
        },
        {
          id: "international-transfers",
          title: "10. International Data Transfers",
          paragraphs: [
            "We may process information in countries other than your own. Where required, we use appropriate safeguards for cross-border transfers in accordance with applicable law.",
          ],
        },
        {
          id: "children",
          title: "11. Children's Privacy",
          paragraphs: [
            "Our website and services are intended for businesses and are not directed to children under 13 (or the equivalent minimum age in your jurisdiction). We do not knowingly collect personal information from children.",
          ],
        },
        {
          id: "changes",
          title: "12. Changes to This Policy",
          paragraphs: [
            "We may update this Privacy Policy from time to time. We will post the revised version on this page and update the date above. Material changes may also be communicated by other reasonable means.",
          ],
        },
      ],
      contactTitle: "Privacy Contact",
      contact,
      notice:
        "This policy should be reviewed and finalized with legal counsel based on your actual data flows, vendors, cookies, and operating jurisdictions.",
    },
    terms: {
      kicker: "Legal",
      title: "Terms of Use",
      lastUpdatedLabel: "Last updated: February 26, 2026",
      contentsLabel: "Contents",
      intro: [
        "These Terms of Use govern access to and use of the ROA website and related services. By using our website or services, you agree to these terms.",
        "If you enter into a separate written agreement with us for paid services, that agreement will control in the event of a conflict with these Terms.",
      ],
      sections: [
        {
          id: "acceptance",
          title: "1. Acceptance of Terms",
          paragraphs: [
            "By accessing or using our website or services, you agree to these Terms and our Privacy Policy. If you use the services on behalf of an organization, you represent that you have authority to bind that organization.",
          ],
        },
        {
          id: "services",
          title: "2. Services and Availability",
          paragraphs: [
            "ROA provides software, automation, analytics, and related commerce growth services. Features may change over time, and we may modify, suspend, or discontinue parts of the services as needed.",
          ],
        },
        {
          id: "accounts",
          title: "3. Accounts and Access",
          bullets: [
            "You must provide accurate information and keep account credentials secure.",
            "You are responsible for activity occurring under your account or connected credentials.",
            "You must promptly notify us of unauthorized access or security incidents affecting your account.",
          ],
        },
        {
          id: "acceptable-use",
          title: "4. Acceptable Use",
          paragraphs: [
            "You may not misuse the website or services, interfere with operations, or use them in violation of law or third-party rights.",
          ],
          bullets: [
            "No unlawful, fraudulent, deceptive, or infringing use.",
            "No attempts to reverse engineer, disrupt, probe, or bypass security controls except as permitted by law.",
            "No upload or transmission of malware, harmful code, or content that could damage systems or data.",
            "No use of the services to process data you are not authorized to share with us.",
          ],
        },
        {
          id: "customer-data",
          title: "5. Customer Data and Responsibilities",
          paragraphs: [
            "You retain responsibility for the legality, accuracy, and integrity of data you provide or connect to the services, including obtaining all required notices, consents, and permissions.",
            "You represent that your use of connected platforms (such as ecommerce, ad, and analytics systems) complies with the applicable platform terms and laws.",
          ],
        },
        {
          id: "intellectual-property",
          title: "6. Intellectual Property",
          paragraphs: [
            "ROA and its licensors own the website, services, software, and related content, including all intellectual property rights. Except for limited rights expressly granted, no rights are transferred to you.",
            "You own your customer data and materials. You grant us the rights needed to host, process, and use them to provide and improve the services as described in our agreements and policies.",
          ],
        },
        {
          id: "feedback",
          title: "7. Feedback",
          paragraphs: [
            "If you provide suggestions or feedback, you grant us a non-exclusive, worldwide, royalty-free right to use that feedback for any lawful business purpose without obligation to you.",
          ],
        },
        {
          id: "third-party-services",
          title: "8. Third-Party Services",
          paragraphs: [
            "Our website or services may integrate with or link to third-party services. We are not responsible for third-party services, and your use of them is governed by their terms and policies.",
          ],
        },
        {
          id: "fees",
          title: "9. Fees and Payment (If Applicable)",
          paragraphs: [
            "Paid services are governed by an order form, proposal, or separate commercial agreement. Unless otherwise stated, fees are non-refundable and payable according to the agreed billing terms.",
          ],
        },
        {
          id: "disclaimers",
          title: "10. Disclaimers",
          paragraphs: [
            "The website and services are provided on an \"as is\" and \"as available\" basis to the extent permitted by law. We do not guarantee uninterrupted operation, error-free performance, or specific business outcomes unless expressly agreed in writing.",
          ],
        },
        {
          id: "limitation-liability",
          title: "11. Limitation of Liability",
          paragraphs: [
            "To the maximum extent permitted by law, ROA will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, revenues, goodwill, or data.",
            "To the maximum extent permitted by law, our aggregate liability relating to the services will not exceed the amount paid (if any) by you to us for the applicable services during the 12 months before the event giving rise to the claim.",
          ],
        },
        {
          id: "indemnity",
          title: "12. Indemnity",
          paragraphs: [
            "You agree to indemnify and hold harmless ROA from claims, liabilities, damages, and expenses arising out of your misuse of the services, your data, or your violation of these Terms or applicable law.",
          ],
        },
        {
          id: "termination",
          title: "13. Suspension and Termination",
          paragraphs: [
            "We may suspend or terminate access if we reasonably believe you violated these Terms, created security risk, or if required by law. You may stop using the services at any time, subject to any separate contract commitments.",
          ],
        },
        {
          id: "governing-law",
          title: "14. Governing Law and Disputes",
          paragraphs: [
            "Unless otherwise stated in a separate written agreement, these Terms are governed by the laws of the Republic of Korea, without regard to conflict of law principles. Courts located in Seoul, Korea will have exclusive jurisdiction, unless mandatory law provides otherwise.",
          ],
        },
        {
          id: "changes",
          title: "15. Changes to These Terms",
          paragraphs: [
            "We may update these Terms from time to time. The updated version will be posted on this page with a revised date. Continued use after the effective date constitutes acceptance of the updated Terms.",
          ],
        },
      ],
      contactTitle: "Terms Contact",
      contact,
      notice:
        "These Terms should be reviewed and finalized with legal counsel, including jurisdiction, dispute resolution, and commercial terms for your production service offering.",
    },
    cookies: {
      kicker: "Legal",
      title: "Cookie Policy",
      lastUpdatedLabel: "Last updated: February 27, 2026",
      contentsLabel: "Contents",
      intro: [
        "This Cookie Policy explains how ROA uses cookies and similar tracking technologies when you visit our website at roa.global.",
        "By using our website, you consent to the use of cookies as described in this policy, subject to your preferences and applicable law.",
      ],
      sections: [
        {
          id: "what-are-cookies",
          title: "1. What Are Cookies",
          paragraphs: [
            "Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and understand how you interact with the content.",
            "Cookies may be set by the website you are visiting (first-party cookies) or by third-party services operating on that site (third-party cookies).",
          ],
        },
        {
          id: "types-we-use",
          title: "2. Types of Cookies We Use",
          bullets: [
            "Essential cookies: Required for basic site functionality such as page navigation and security. The site cannot function properly without these.",
            "Analytics cookies: Help us understand how visitors interact with our website by collecting anonymous usage data such as pages visited and time spent.",
            "Preference cookies: Remember your choices (such as language preference) to provide a more personalized experience.",
          ],
        },
        {
          id: "third-party-cookies",
          title: "3. Third-Party Cookies",
          paragraphs: [
            "Some cookies on our site are placed by third-party services we use, such as analytics providers. These third parties may collect information about your online activities over time and across different websites.",
          ],
          bullets: [
            "Analytics services to measure site performance and visitor behavior.",
            "Content delivery networks for fast and reliable page loading.",
          ],
        },
        {
          id: "managing-cookies",
          title: "4. Managing Cookies",
          paragraphs: [
            "You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. However, blocking essential cookies may affect the functionality of our website.",
          ],
          bullets: [
            "Check your browser's help documentation for instructions on managing cookies.",
            "You can delete all cookies already stored on your device at any time.",
            "You can set your browser to prevent cookies from being placed.",
          ],
        },
        {
          id: "consent",
          title: "5. Consent",
          paragraphs: [
            "When you first visit our website, we will ask for your consent to use non-essential cookies. You may accept or decline. Your preference is stored so you will not be asked again unless you clear your cookies or change your settings.",
          ],
        },
        {
          id: "retention",
          title: "6. Cookie Retention",
          paragraphs: [
            "Different cookies have different lifespans. Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them.",
            "We do not retain cookie data longer than necessary for the purposes described in this policy.",
          ],
        },
        {
          id: "changes",
          title: "7. Changes to This Policy",
          paragraphs: [
            "We may update this Cookie Policy from time to time to reflect changes in our practices or applicable law. Updates will be posted on this page with a revised date.",
          ],
        },
        {
          id: "contact",
          title: "8. Contact",
          paragraphs: [
            "If you have questions about our use of cookies, please contact us at hello@roa.global.",
          ],
        },
      ],
      contactTitle: "Cookie Policy Contact",
      contact,
      notice:
        "This cookie policy should be reviewed with legal counsel and updated to reflect the specific cookies and tracking technologies used on your site.",
    },
  },
  ko: {
    privacy: {
      kicker: "법적 고지",
      title: "개인정보처리방침",
      lastUpdatedLabel: "최종 업데이트: 2026년 2월 26일",
      contentsLabel: "목차",
      intro: [
        "본 개인정보처리방침은 ROA가 웹사이트 방문, 문의, 서비스 제공 과정에서 개인정보를 어떻게 수집, 이용, 공유, 보호하는지 설명합니다.",
        "또한 관련 법령에 따라 이용자가 행사할 수 있는 선택권 및 권리에 대해 안내합니다.",
      ],
      sections: [
        {
          id: "scope",
          title: "1. 적용 범위",
          paragraphs: [
            "본 방침은 roa.global 웹사이트, 문의 양식, 영업 커뮤니케이션, 관련 서비스 운영 과정에서 처리되는 개인정보에 적용됩니다.",
            "고객을 대신해 처리하는 데이터는 별도 계약(예: 서비스 계약, 데이터 처리 계약) 및 고객 지시에 따릅니다.",
          ],
        },
        {
          id: "information-we-collect",
          title: "2. 수집하는 정보",
          paragraphs: ["당사는 이용자가 직접 제공한 정보와 웹사이트/서비스 이용 과정에서 생성되는 정보를 수집할 수 있습니다."],
          bullets: [
            "이름, 회사명, 이메일, 전화번호, 직함 등 연락 및 비즈니스 정보",
            "문의 내용, 미팅 일정, 이메일 내역 등 커뮤니케이션 정보",
            "IP 주소, 브라우저 종류, 방문 페이지, 접속 시각, 유입 URL 등 이용/기기 정보",
            "사이트 기능 제공, 분석, 성능 측정을 위한 쿠키 및 유사 기술 정보",
            "고객이 서비스 연결 또는 제공을 통해 공유한 서비스 관련 비즈니스 데이터(계약 범위 내)",
          ],
        },
        {
          id: "how-we-use",
          title: "3. 정보 이용 목적",
          bullets: [
            "서비스 및 웹사이트 제공, 운영, 유지보수, 개선",
            "문의 응답, 데모 진행, 지원 및 업무 커뮤니케이션",
            "성능 분석, 장애 진단, 보안 강화",
            "서비스 공지, 관리 안내, 허용된 범위의 마케팅 커뮤니케이션",
            "법적 의무 준수, 계약 집행, 권리 및 안전 보호",
          ],
        },
        {
          id: "legal-bases",
          title: "4. 처리의 법적 근거(해당 시)",
          paragraphs: [
            "EEA/영국 등 법적 근거가 요구되는 지역의 경우, 당사는 계약 이행, 정당한 이익, 동의, 법적 의무 준수 등의 근거에 따라 개인정보를 처리할 수 있습니다.",
          ],
        },
        {
          id: "sharing",
          title: "5. 제3자 제공 및 공유",
          paragraphs: [
            "당사는 금전적 대가를 받고 개인정보를 판매하지 않습니다. 다만 서비스 운영에 필요한 범위에서 아래와 같이 제3자와 정보를 공유할 수 있습니다.",
          ],
          bullets: [
            "호스팅, 분석, 커뮤니케이션, CRM, 폼 처리 등 수탁업체/서비스 제공업체",
            "법률, 세무, 회계 등 전문 자문기관(비밀유지 의무 하)",
            "법령 준수 또는 권리/보안/안전 보호를 위해 필요한 기관 또는 당사자",
            "합병, 인수, 투자, 자산 양도 등 거래 과정의 승계 주체",
          ],
        },
        {
          id: "cookies",
          title: "6. 쿠키 및 추적 기술",
          paragraphs: [
            "당사는 사이트 운영, 트래픽 분석, 사용자 경험 개선을 위해 쿠키 및 유사 기술을 사용할 수 있습니다. 지역에 따라 브라우저 설정 또는 동의 도구를 통해 비필수 쿠키를 관리할 수 있습니다.",
          ],
        },
        {
          id: "retention",
          title: "7. 보관 기간",
          paragraphs: [
            "당사는 본 방침의 목적 달성, 서비스 제공, 기록 유지, 분쟁 해결, 계약 집행, 법적 의무 준수에 필요한 범위에서 개인정보를 보관합니다.",
          ],
        },
        {
          id: "security",
          title: "8. 정보보호",
          paragraphs: [
            "당사는 개인정보 보호를 위해 관리적, 기술적, 물리적 보호조치를 적용합니다. 다만 어떤 전송/저장 방식도 완전한 보안을 보장할 수는 없습니다.",
          ],
        },
        {
          id: "rights",
          title: "9. 이용자 권리",
          paragraphs: [
            "이용자 위치에 따라 개인정보 열람, 정정, 삭제, 처리 제한, 처리 반대, 사본 요청 등의 권리가 있을 수 있습니다. 마케팅 메시지 수신 거부도 언제든 가능합니다.",
            "캘리포니아 등 일부 지역 이용자는 현지 개인정보 보호법에 따른 추가 권리를 가질 수 있습니다(예외 적용 가능).",
          ],
        },
        {
          id: "international-transfers",
          title: "10. 국외 이전",
          paragraphs: [
            "당사는 귀하의 국가 외 지역에서 정보를 처리할 수 있습니다. 관련 법이 요구하는 경우 적절한 보호조치를 적용합니다.",
          ],
        },
        {
          id: "children",
          title: "11. 아동의 개인정보",
          paragraphs: [
            "당사 웹사이트 및 서비스는 기업 대상이며 아동을 대상으로 하지 않습니다. 당사는 아동의 개인정보를 고의로 수집하지 않습니다.",
          ],
        },
        {
          id: "changes",
          title: "12. 방침 변경",
          paragraphs: [
            "당사는 본 방침을 수시로 변경할 수 있으며, 변경 시 본 페이지에 개정본과 업데이트 일자를 게시합니다. 중요한 변경은 합리적인 방식으로 추가 고지할 수 있습니다.",
          ],
        },
      ],
      contactTitle: "개인정보 문의",
      contact,
      notice:
        "실제 데이터 흐름, 사용 중인 벤더/쿠키, 운영 국가에 맞춰 법률 자문을 통해 최종 확정하는 것을 권장합니다.",
    },
    terms: {
      kicker: "법적 고지",
      title: "이용약관",
      lastUpdatedLabel: "최종 업데이트: 2026년 2월 26일",
      contentsLabel: "목차",
      intro: [
        "본 이용약관은 ROA 웹사이트 및 관련 서비스의 이용 조건을 규정합니다. 웹사이트 또는 서비스를 이용하면 본 약관에 동의한 것으로 봅니다.",
        "유료 서비스에 관해 별도 서면 계약을 체결한 경우, 해당 계약이 본 약관과 충돌하는 범위에서 우선 적용됩니다.",
      ],
      sections: [
        {
          id: "acceptance",
          title: "1. 약관 동의",
          paragraphs: [
            "귀하가 당사 웹사이트 또는 서비스를 이용하는 경우 본 약관 및 개인정보처리방침에 동의한 것으로 간주됩니다. 조직을 대신해 이용하는 경우 해당 조직을 구속할 권한이 있음을 진술하고 보장합니다.",
          ],
        },
        {
          id: "services",
          title: "2. 서비스 내용 및 변경",
          paragraphs: [
            "ROA는 소프트웨어, 자동화, 분석 및 커머스 성장 지원 관련 서비스를 제공합니다. 기능 및 서비스 범위는 필요에 따라 변경, 중단 또는 종료될 수 있습니다.",
          ],
        },
        {
          id: "accounts",
          title: "3. 계정 및 접근 관리",
          bullets: [
            "정확한 정보를 제공하고 계정 자격증명을 안전하게 관리해야 합니다.",
            "계정 또는 연결된 자격증명으로 발생한 활동에 대한 책임은 이용자에게 있습니다.",
            "무단 접근 또는 보안 사고를 인지한 경우 즉시 당사에 알려야 합니다.",
          ],
        },
        {
          id: "acceptable-use",
          title: "4. 허용되는 사용 및 금지행위",
          paragraphs: [
            "귀하는 웹사이트 또는 서비스를 오용하거나, 운영을 방해하거나, 법령 또는 제3자 권리를 침해하는 방식으로 이용해서는 안 됩니다.",
          ],
          bullets: [
            "불법, 사기, 기만, 침해 목적의 사용 금지",
            "법이 허용하는 범위를 제외한 역설계, 보안 우회, 침투 시도, 서비스 방해 금지",
            "악성코드 또는 시스템/데이터에 피해를 줄 수 있는 콘텐츠 전송 금지",
            "당사에 제공할 권한이 없는 데이터의 처리 요청 금지",
          ],
        },
        {
          id: "customer-data",
          title: "5. 고객 데이터 및 이용자 책임",
          paragraphs: [
            "귀하는 당사 서비스에 제공하거나 연결하는 데이터의 적법성, 정확성, 무결성에 대한 책임을 부담하며, 필요한 고지, 동의, 권한을 확보해야 합니다.",
            "전자상거래/광고/분석 플랫폼 등 연결 서비스의 이용은 해당 플랫폼 약관 및 관련 법령을 준수해야 합니다.",
          ],
        },
        {
          id: "intellectual-property",
          title: "6. 지식재산권",
          paragraphs: [
            "웹사이트, 서비스, 소프트웨어 및 관련 콘텐츠에 대한 권리는 ROA 또는 라이선스 제공자에게 귀속됩니다. 명시적으로 허용된 범위를 제외하고 권리는 이전되지 않습니다.",
            "고객 데이터 및 고객 제공 자료의 권리는 고객에게 귀속됩니다. 단, 서비스 제공 및 개선에 필요한 범위에서 당사에 이용 권한을 부여합니다.",
          ],
        },
        {
          id: "feedback",
          title: "7. 피드백",
          paragraphs: [
            "귀하가 제안 또는 피드백을 제공하는 경우, 당사는 별도 보상 의무 없이 합법적인 사업 목적 범위에서 이를 사용할 수 있습니다.",
          ],
        },
        {
          id: "third-party-services",
          title: "8. 제3자 서비스",
          paragraphs: [
            "웹사이트 또는 서비스에는 제3자 서비스 연동 또는 링크가 포함될 수 있습니다. 제3자 서비스 이용은 해당 서비스의 약관 및 정책이 적용되며, 당사는 이에 대한 책임을 부담하지 않습니다.",
          ],
        },
        {
          id: "fees",
          title: "9. 요금 및 결제(해당 시)",
          paragraphs: [
            "유료 서비스 조건은 견적서, 제안서, 주문서 또는 별도 계약에 따릅니다. 별도 합의가 없는 한 요금은 환불되지 않으며 합의된 청구 조건에 따라 지급됩니다.",
          ],
        },
        {
          id: "disclaimers",
          title: "10. 면책 조항",
          paragraphs: [
            "법이 허용하는 범위에서 웹사이트 및 서비스는 \"있는 그대로\" 및 \"이용 가능한 상태로\" 제공됩니다. 당사는 중단 없는 운영, 오류 없는 성능, 특정 사업 성과를 보장하지 않습니다(서면으로 명시 합의한 경우 제외).",
          ],
        },
        {
          id: "limitation-liability",
          title: "11. 책임의 제한",
          paragraphs: [
            "법이 허용하는 최대 범위에서 당사는 간접손해, 부수손해, 특별손해, 결과손해, 징벌적 손해 또는 이익/매출/영업권/데이터 손실에 대해 책임지지 않습니다.",
            "법이 허용하는 최대 범위에서 당사의 총 책임 한도는 청구 원인 발생 전 12개월 동안 해당 서비스와 관련하여 이용자가 실제 지급한 금액(있는 경우)을 초과하지 않습니다.",
          ],
        },
        {
          id: "indemnity",
          title: "12. 면책(배상)",
          paragraphs: [
            "귀하는 귀하의 서비스 오용, 귀하의 데이터, 본 약관 또는 관련 법령 위반으로 인해 발생한 청구, 책임, 손해, 비용으로부터 ROA를 면책하고 방어하는 데 협력해야 합니다.",
          ],
        },
        {
          id: "termination",
          title: "13. 서비스 중단 및 해지",
          paragraphs: [
            "당사는 귀하의 약관 위반, 보안 위험 발생, 법적 요구가 있다고 합리적으로 판단하는 경우 접근을 제한하거나 해지할 수 있습니다. 귀하는 별도 계약상의 의무를 전제로 언제든 이용을 중단할 수 있습니다.",
          ],
        },
        {
          id: "governing-law",
          title: "14. 준거법 및 분쟁 해결",
          paragraphs: [
            "별도 서면 계약에 다른 정함이 없는 한 본 약관은 대한민국 법률에 따르며, 국제사법상 저촉법 원칙은 제외됩니다. 강행법규가 달리 정하지 않는 한 서울 소재 법원을 전속 관할로 합니다.",
          ],
        },
        {
          id: "changes",
          title: "15. 약관 변경",
          paragraphs: [
            "당사는 본 약관을 변경할 수 있으며, 변경본은 본 페이지에 게시되고 업데이트 일자가 수정됩니다. 변경 효력 발생 후 계속 이용하는 경우 변경 약관에 동의한 것으로 간주됩니다.",
          ],
        },
      ],
      contactTitle: "약관 문의",
      contact,
      notice:
        "준거법, 분쟁 해결, 상업 조건, 데이터 처리 및 보안 조건은 실제 서비스 운영 형태에 맞춰 법률 검토 후 확정하는 것을 권장합니다.",
    },
    cookies: {
      kicker: "법적 고지",
      title: "쿠키 정책",
      lastUpdatedLabel: "최종 업데이트: 2026년 2월 27일",
      contentsLabel: "목차",
      intro: [
        "본 쿠키 정책은 ROA가 roa.global 웹사이트 방문 시 쿠키 및 유사 추적 기술을 어떻게 사용하는지 설명합니다.",
        "본 웹사이트를 이용함으로써 관련 법령 및 귀하의 설정에 따라 본 정책에 설명된 쿠키 사용에 동의하게 됩니다.",
      ],
      sections: [
        {
          id: "what-are-cookies",
          title: "1. 쿠키란",
          paragraphs: [
            "쿠키는 웹사이트 방문 시 사용자의 기기에 저장되는 작은 텍스트 파일입니다. 사이트가 사용자의 설정을 기억하고 콘텐츠 이용 방식을 파악하는 데 도움을 줍니다.",
            "쿠키는 방문 중인 웹사이트(자사 쿠키)나 해당 사이트에서 운영되는 제3자 서비스(제3자 쿠키)에 의해 설정될 수 있습니다.",
          ],
        },
        {
          id: "types-we-use",
          title: "2. 사용하는 쿠키 유형",
          bullets: [
            "필수 쿠키: 페이지 탐색, 보안 등 기본 사이트 기능에 필요합니다. 이 쿠키 없이는 사이트가 정상 작동하지 않을 수 있습니다.",
            "분석 쿠키: 방문 페이지, 체류 시간 등 익명 이용 데이터를 수집하여 방문자가 사이트를 어떻게 이용하는지 파악합니다.",
            "환경설정 쿠키: 언어 설정 등 사용자의 선택을 기억하여 맞춤형 경험을 제공합니다.",
          ],
        },
        {
          id: "third-party-cookies",
          title: "3. 제3자 쿠키",
          paragraphs: [
            "당사 사이트의 일부 쿠키는 분석 서비스 등 제3자가 설정합니다. 이러한 제3자는 시간 경과에 따라 여러 웹사이트에서 사용자의 온라인 활동 정보를 수집할 수 있습니다.",
          ],
          bullets: [
            "사이트 성능 및 방문자 행동 측정을 위한 분석 서비스",
            "빠르고 안정적인 페이지 로딩을 위한 콘텐츠 전송 네트워크",
          ],
        },
        {
          id: "managing-cookies",
          title: "4. 쿠키 관리",
          paragraphs: [
            "브라우저 설정을 통해 쿠키를 제어할 수 있습니다. 대부분의 브라우저에서 쿠키 차단 또는 삭제가 가능합니다. 다만 필수 쿠키를 차단하면 웹사이트 기능에 영향을 줄 수 있습니다.",
          ],
          bullets: [
            "쿠키 관리 방법은 사용 중인 브라우저의 도움말을 참조하세요.",
            "기기에 저장된 쿠키는 언제든 삭제할 수 있습니다.",
            "브라우저에서 쿠키 저장을 사전 차단할 수 있습니다.",
          ],
        },
        {
          id: "consent",
          title: "5. 동의",
          paragraphs: [
            "웹사이트 첫 방문 시 비필수 쿠키 사용에 대한 동의를 요청합니다. 동의 또는 거부를 선택할 수 있으며, 설정은 저장되어 쿠키를 삭제하거나 설정을 변경하지 않는 한 다시 묻지 않습니다.",
          ],
        },
        {
          id: "retention",
          title: "6. 쿠키 보관 기간",
          paragraphs: [
            "쿠키마다 보관 기간이 다릅니다. 세션 쿠키는 브라우저를 닫으면 삭제됩니다. 영구 쿠키는 설정된 기간 동안 또는 사용자가 삭제할 때까지 기기에 남습니다.",
            "당사는 본 정책에 설명된 목적에 필요한 기간 이상으로 쿠키 데이터를 보관하지 않습니다.",
          ],
        },
        {
          id: "changes",
          title: "7. 정책 변경",
          paragraphs: [
            "당사는 운영 방식 변경이나 법령 변경을 반영하기 위해 본 쿠키 정책을 수시로 업데이트할 수 있습니다. 변경 시 본 페이지에 개정 일자와 함께 게시됩니다.",
          ],
        },
        {
          id: "contact",
          title: "8. 문의",
          paragraphs: [
            "쿠키 사용에 대한 질문이 있으시면 hello@roa.global로 연락해 주세요.",
          ],
        },
      ],
      contactTitle: "쿠키 정책 문의",
      contact,
      notice:
        "본 쿠키 정책은 실제 사용 중인 쿠키 및 추적 기술을 반영하여 법률 검토 후 확정하는 것을 권장합니다.",
    },
  },
};

export function getLegalDocument(locale: string, key: LegalDocKey): LegalDocument {
  const safeLocale: LegalLocale = locale === "ko" ? "ko" : "en";
  return documents[safeLocale][key];
}
