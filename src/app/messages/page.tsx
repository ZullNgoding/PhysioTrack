import React from 'react';
// Note: This page usually doesn't use the standard Sidebar layout because it needs full height
// It might define its own layout structure or use a variant of AppLayout

export default function MessagesPage() {
  return (
    <div className="flex h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-text-main dark:text-text-light">
      
      {/* Header (Simplified for Chat context) */}
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-border-light bg-card-light px-6">
         <div className="flex items-center gap-3">
             <span className="material-symbols-outlined text-primary text-3xl">sprint</span>
             <h2 className="text-xl font-bold">PhysioTrack</h2>
         </div>
         {/* ... Search & Profile icons ... */}
      </header>

      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Panel: Patient List */}
        <aside className="w-80 border-r border-border-light bg-card-light flex flex-col">
            <div className="p-4 border-b border-border-light">
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-lg">search</span>
                    <input className="w-full pl-9 h-10 rounded-lg bg-background-light border border-border-light text-sm" placeholder="Search Patients" />
                </div>
            </div>
            <div className="overflow-y-auto flex-1">
                <ChatItem 
                    name="Benjamin Carter" 
                    time="10:42 AM" 
                    msg="Sounds good, I'll see you then." 
                    unread={2} 
                    active 
                    avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDIdAJAV0ikM6yIrbVKaYRlxF9f8ETBRqx7AsC1m5m8NazyuE1CUCnD_4QNA1H1F4IXQwGVQO5qk5llnieXRIdgO87AAMClOJ4V9o-_dD4lSPYDUly-DXMCGlAOWiq24sZy5S9uPpe0VTc0CaEuWfSXYhxjbgUfwVNybnaUoqnuicd4oGcR52BR6bfgJQ6OwhEVR2AB0MZaGVojY1C5Z7hHJKGKtK_vbQl3s-md3eTqxjsL13hwQA0sdeElFRbCFdBig7ONDKamBUk" 
                />
                <ChatItem 
                    name="Olivia Rodriguez" 
                    time="Yesterday" 
                    msg="The new exercises are helping!" 
                    avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBgKaUsVLqFRsUtVI6TETbRWEdY5bgm8nq29Gqmy-XFHquATymr7BwHG78vJT0FYe5-LZt7dXuszbXXTWgNijVNDIWxMGRRPkUiUboDh3bC-s6dK-MgUCdCvTwF1eoOfkSStLmvuxtIdAgyyMpq_E_TsTjEzJ6S170fLWb6ihl_1U9w_gpPlDpR5CxER3ykxRmD1Cr8XHE37nC3NYZ6zKt2069EcmbIbk6F1rbSP-IsmqRrbO3zlmTQ51iuRi53xKD9UJmnmnVmMQA" 
                />
            </div>
        </aside>

        {/* Center Panel: Chat */}
        <section className="flex-1 flex flex-col bg-background-light relative">
            {/* Chat Header */}
            <div className="h-16 border-b border-border-light bg-card-light flex items-center justify-between px-6">
                <div>
                    <h3 className="font-bold text-lg">Benjamin Carter</h3>
                    <div className="flex items-center gap-2 text-xs text-accent-green">
                        <div className="w-2 h-2 rounded-full bg-accent-green"></div> Online
                    </div>
                </div>
                <div className="flex gap-2">
                    {['call', 'videocam', 'more_vert'].map(icon => (
                        <button key={icon} className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-text-muted">
                            <span className="material-symbols-outlined">{icon}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <MessageBubble 
                    side="left" 
                    text="Hi Dr. Evans, just confirming our appointment for 2 PM." 
                    time="10:30 AM"
                    avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAp1-RXMorcBI5kCbAwmJcl4bENs_dMZbR9VDvNpmViut3-S0IJVCiDDZvH_A2D53UY9YZgMeCSnQSI4ev1sbNIQDzdW9u_7kPztl7_E_33xzu1Nj2aWAdfTID0ma65WUOjc9jyE-Mhlas0zAVdVFV2A-rPLwIi1_Jk2rwVaoW1yFK0Ib6_XZgiJ1qZnvro1hl87B4oqr8gjQWWLuE9UNvnoUQ7IIbttv2V_yeBQPPsRC3iw1a713qi4aC-qM02MmUhZSpKtB4irC0"
                />
                <MessageBubble 
                    side="right" 
                    text="Hi Benjamin, confirmed for 2 PM. Please remember the stretching." 
                    time="10:35 AM"
                    avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuDnj65grG3qGyEFMLjQeqRwsa-gjYJ2vvXejPrZuASBVKhwbiJ00SQQAsdTFSax_9taI78LgP7CuWFmLpq79fOKMV6vyRFvO6Xz90GHYAeLAFLpEXb6LTTAjyS1vW2v669T78XuNKu6VXCY-SHysBHchRzt37mDazM8OXm30eoDrsdjskiz67ihzIqHouHVx5smnyGwvpS0Ur6pvCOFx8xqdOSyD8qJe1ztxqIh1nELCVXsPx8dmYASGeKTG0ZVfEGnzzZAcIXaQSg"
                />
            </div>

            {/* Input */}
            <div className="p-4 bg-card-light border-t border-border-light">
                <div className="flex gap-2 bg-background-light border border-border-light rounded-lg p-2">
                    <button className="text-text-muted hover:text-primary"><span className="material-symbols-outlined">attach_file</span></button>
                    <input className="flex-1 bg-transparent border-none focus:ring-0" placeholder="Type a message..." />
                    <button className="w-9 h-9 bg-primary text-white rounded-lg flex items-center justify-center"><span className="material-symbols-outlined text-lg">send</span></button>
                </div>
            </div>
        </section>

        {/* Right Panel: Context Info */}
        <aside className="hidden xl:flex w-80 bg-card-light border-l border-border-light flex-col p-6 gap-6">
            <div className="text-center">
                <div 
                    className="w-24 h-24 rounded-full bg-cover mx-auto mb-4"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3rja8x9UJuxCzjf55VhUI9__d9xRXqLiGKAW2vYGm5hoQDTWh69Ikn-DpOrQo_580y-gnHagafNjZhgHrViNWYxUyn_rTJy57_S77BxDh-zY3_6LU-VCYmPyl11pIAcTYg2rO7p2cB4fDGl8KumjZOWs0PtkM3UC-Xf4r5kLhrWu5wv7BbSoYwd1PS79p4UD-RwRveNgA0kTmUuqPvIP9BNIUPG7cleOgG9OgzME_3YIES9JexxMnMJUAGlP39MKs5gmt8Ne3NGA")' }}
                />
                <h3 className="text-xl font-bold">Benjamin Carter</h3>
                <p className="text-sm text-text-muted">Age: 34</p>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mt-2">Lower Back Pain</div>
            </div>
            
            <hr className="border-border-light" />
            
            <div>
                <h4 className="font-semibold mb-3">Upcoming Appointment</h4>
                <div className="border border-border-light rounded-lg p-4 flex gap-4 items-center">
                    <div className="bg-background-light p-2 rounded text-center min-w-[3rem]">
                        <div className="text-xs text-primary font-bold">NOV</div>
                        <div className="text-xl font-bold">28</div>
                    </div>
                    <div>
                        <p className="font-medium text-sm">In-Person Session</p>
                        <p className="text-xs text-text-muted">Tuesday, 2:00 PM</p>
                    </div>
                </div>
            </div>

            <div className="mt-auto space-y-3">
                <button className="w-full h-10 bg-accent-green text-white rounded-lg font-bold flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-lg">videocam</span> Start Video Call
                </button>
                <button className="w-full h-10 bg-secondary text-text-muted rounded-lg font-bold">View Full Profile</button>
            </div>
        </aside>

      </div>
    </div>
  );
}

const ChatItem = ({ name, msg, time, unread, active, avatar }: any) => (
    <div className={`flex gap-4 p-4 cursor-pointer border-l-4 ${active ? 'border-primary bg-primary/5' : 'border-transparent hover:bg-gray-50'}`}>
        <div className="relative">
            <img src={avatar} className="w-12 h-12 rounded-full object-cover" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-accent-green border-2 border-white rounded-full"></div>
        </div>
        <div className="flex-1 overflow-hidden">
            <div className="flex justify-between items-baseline">
                <span className="font-semibold truncate">{name}</span>
                <span className="text-xs text-text-muted">{time}</span>
            </div>
            <div className="flex justify-between items-center mt-1">
                <span className="text-sm text-text-muted truncate">{msg}</span>
                {unread && <span className="flex items-center justify-center bg-primary text-white text-xs font-bold w-5 h-5 rounded-full">{unread}</span>}
            </div>
        </div>
    </div>
);

const MessageBubble = ({ text, time, avatar, side }: any) => {
    const isSelf = side === 'right';
    return (
        <div className={`flex gap-3 ${isSelf ? 'flex-row-reverse' : 'flex-row'}`}>
            <img src={avatar} className="w-8 h-8 rounded-full object-cover" />
            <div className={`max-w-[70%] flex flex-col gap-1 ${isSelf ? 'items-end' : 'items-start'}`}>
                <div className={`p-3 rounded-b-lg ${isSelf ? 'bg-primary text-white rounded-tl-lg' : 'bg-card-light shadow-sm rounded-tr-lg'}`}>
                    <p className="text-sm">{text}</p>
                </div>
                <span className="text-xs text-text-muted">{time}</span>
            </div>
        </div>
    );
};