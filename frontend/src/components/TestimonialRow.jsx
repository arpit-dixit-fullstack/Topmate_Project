import React from 'react';

const testimonials = [
    {
        name: "Rishi Tiwari",
        date: "29/12/2024",
        content: "Followed Nandini's exact steps and saw results in a week",
        initials: "RT",
    },
    {
        name: "Vivek Mohan",
        date: "29/12/2024",
        content: "One session with Mira saved me from months of trial and error",
        initials: "VM",
    },
    {
        name: "Anita Rao",
        date: "29/12/2024",
        content: "Shubham's insights were worth 10x the price. Game-changing call!",
        initials: "AR",
    },
    {
        name: "Priya",
        date: "29/12/2024",
        content: "Sanket's framework changed everything. Results came in days!",
        initials: "PR",
    },
    {
        name: "Sarah Joseph",
        date: "29/12/2024",
        content: "Gaurav's session gave me clarity that months of research couldn't",
        initials: "SJ",
    },
    {
        name: "Anita Rao",
        date: "29/12/2024",
        content: "Shubham's insights were worth 10x the price. Game-changing call!",
        initials: "AR",
    },
    {
        name: "Priya",
        date: "29/12/2024",
        content: "Sanket's framework changed everything. Results came in days!",
        initials: "PR",
    },
    {
        name: "Sarah Joseph",
        date: "29/12/2024",
        content: "Gaurav's session gave me clarity that months of research couldn't",
        initials: "SJ",
    },
    {
        name: "Anita Rao",
        date: "29/12/2024",
        content: "Shubham's insights were worth 10x the price. Game-changing call!",
        initials: "AR",
    },
    {
        name: "Priya",
        date: "29/12/2024",
        content: "Sanket's framework changed everything. Results came in days!",
        initials: "PR",
    },
    {
        name: "Sarah Joseph",
        date: "29/12/2024",
        content: "Gaurav's session gave me clarity that months of research couldn't",
        initials: "SJ",
    },
    {
        name: "Anita Rao",
        date: "29/12/2024",
        content: "Shubham's insights were worth 10x the price. Game-changing call!",
        initials: "AR",
    },
    {
        name: "Priya",
        date: "29/12/2024",
        content: "Sanket's framework changed everything. Results came in days!",
        initials: "PR",
    },
    {
        name: "Sarah Joseph",
        date: "29/12/2024",
        content: "Gaurav's session gave me clarity that months of research couldn't",
        initials: "SJ",
    },
    {
        name: "Anita Rao",
        date: "29/12/2024",
        content: "Shubham's insights were worth 10x the price. Game-changing call!",
        initials: "AR",
    },
    {
        name: "Priya",
        date: "29/12/2024",
        content: "Sanket's framework changed everything. Results came in days!",
        initials: "PR",
    },
    {
        name: "Sarah Joseph",
        date: "29/12/2024",
        content: "Gaurav's session gave me clarity that months of research couldn't",
        initials: "SJ",
    },
];

function TestimonialRow({ reverse = false }) {
    return (
        <div className="overflow-hidden">
            <div
                className={`flex gap-4 w-max ${reverse ? "animate-scrollRight" : "animate-scrollLeft"
                    }`}
            >
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-72 p-4 bg-white rounded-xl shadow-md"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                                {t.initials}
                            </div>
                            <div>
                                <p className="font-semibold">{t.name}</p>
                                <p className="text-xs text-gray-500">{t.date}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-800">{t.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestimonialRow;