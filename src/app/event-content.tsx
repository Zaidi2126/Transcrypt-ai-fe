"use client";

import {
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";


const EVENT_CONTENT = [
  {
    title: "Transcrypt AI  – The Ultimate Productivity Booster!",
    des: "Transcrypt AI  is a game-changer! It’s incredibly accurate in converting speech to text, and the instant translation feature works flawlessly. The meeting minutes generator is a lifesaver for team discussions and follow-ups. A must-have app for professionals and students alike!",
    name: "Zubair Ahsan",
    position: "Operations Analyst, Vertex Dynamics",
    panel: "Canada",
    img: "/image/avatar1.jpg",
  },
  {
    title: "高效又智能的语音转文字神器",
    des: "这个应用程序太棒了！它不仅可以实时将语音转化为文本，还可以即时翻译，非常适合多语言团队合作。我尤其喜欢它的会议记录功能，可以自动生成重要的总结和重点。推荐给所有需要高效工作的人！",
    name: "Blank",
    position: "Project Coordinator, BlueDot Innovations",
    panel: "China",
    img: "/image/avatar2.jpg",
  },
  {
    title: "ٹرانسکرائب اے آئی – ایک حیرت انگیز ایپ!",
    des: "ٹرانسکرائب اے آئی نے واقعی میری زندگی آسان بنا دی ہے۔ نہ صرف یہ کہ یہ تقریر کو فوری اور درست طریقے سے تحریر میں تبدیل کرتا ہے بلکہ یہ ترجمہ بھی اتنا ہی شاندار ہے۔ میٹنگ کے منٹس خودکار طور پر بنانا ایک شاندار خصوصیت ہے۔ اردو اور دیگر زبانوں کے ساتھ کام کرنے کے لیے بہترین ایپ۔",
    name: "Rabi ul Islam",
    position: "Content Strategist, GrowthHive Media",
    panel: "Pakistan",
    img: "/image/avatar3.jpg",
  },
];

export function EventContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      
      <div className="mx-auto container">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
