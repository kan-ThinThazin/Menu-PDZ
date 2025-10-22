import React, { useState } from "react";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="font-myanmar text-5xl md:text-6xl text-amber-900 mb-6">
          ကျွန်ုပ်တို့အကြောင်း
        </h1>
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          ကျေးဇူးတင်စွာဖြင့် ကျွန်ုပ်တို့၏လက်ဖက်ရည်ဆိုင်သို့ ကြိုဆိုပါသည်။ 
          ရိုးရာနည်းလမ်းများဖြင့် ပြုလုပ်ထားသော အရသာရှိသည့် လက်ဖက်ရည်များကို ခံစားရန်
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Image Section */}
        <div className="relative">
          <div className="bg-amber-100 rounded-2xl p-4 transform rotate-2">
            <div className="bg-amber-50 rounded-xl overflow-hidden shadow-2xl transform -rotate-2">
              <img 
                src="/api/placeholder/600/400" 
                alt="Our Tea Shop"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-300 rounded-full"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-amber-200 rounded-full"></div>
        </div>

        {/* Story Section */}
        <div className="space-y-6">
          <h2 className="font-myanmar text-3xl md:text-4xl text-amber-800 mb-4">
            ကျွန်ုပ်တို့၏အကြောင်း
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            ၁၉၉၀ ပြည့်နှစ်မှစတင်ကာ ကျွန်ုပ်တို့၏မိသားစုသည် ရိုးရာလက်ဖက်ရည်ပြုလုပ်နည်းများကို 
            မျိုးဆက်တစ်ဆက်ပြီးတစ်ဆက် ထိန်းသိမ်းလာခဲ့ပါသည်။
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            ကျွန်ုပ်တို့သည် လတ်ဆတ်သောလက်ဖက်ရွက်များနှင့် ရိုးရာနည်းလမ်းများကို အသုံးပြု၍ 
            အကောင်းဆုံးသောလက်ဖက်ရည်များကို ပြုလုပ်ပေးလျက်ရှိပါသည်။
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="text-center p-4 bg-amber-50 rounded-lg">
              <div className="text-2xl mb-2">🍃</div>
              <h3 className="font-semibold text-amber-800">လတ်ဆတ်သော</h3>
              <p className="text-sm text-gray-600">လတ်ဆတ်သောလက်ဖက်ရွက်များ</p>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg">
              <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
              <h3 className="font-semibold text-amber-800">မိသားစု</h3>
              <p className="text-sm text-gray-600">မျိုးဆက်ပေါင်းများစွာ</p>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="font-semibold text-amber-800">အရည်အသွေး</h3>
              <p className="text-sm text-gray-600">အကောင်းဆုံးအရည်အသွေး</p>
            </div>
            <div className="text-center p-4 bg-amber-50 rounded-lg">
              <div className="text-2xl mb-2">❤️</div>
              <h3 className="font-semibold text-amber-800">ချစ်ခြင်းမေတ္တာ</h3>
              <p className="text-sm text-gray-600">ချစ်ခြင်းမေတ္တာဖြင့်ပြုလုပ်သည်</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["story", "mission", "values"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
            >
              {tab === "story" && "ကျွန်ုပ်တို့၏ဇာတ်လမ်း"}
              {tab === "mission" && "ကျွန်ုပ်တို့၏ရည်ရွယ်ချက်"}
              {tab === "values" && "တန်ဖိုးများ"}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {activeTab === "story" && (
            <div className="space-y-4">
              <h3 className="font-myanmar text-2xl text-amber-800 mb-4">ကျွန်ုပ်တို့၏ဇာတ်လမ်း</h3>
              <p className="text-gray-700 leading-relaxed">
                ကျွန်ုပ်တို့၏ဖခင် ဦးအောင်မင်းသည် ၁၉၉၀ ပြည့်နှစ်တွင် ဤလက်ဖက်ရည်ဆိုင်ကလေးကို 
                စတင်တည်ထောင်ခဲ့ပါသည်။ ကျေးလက်ဒေသမှ လတ်ဆတ်သောလက်ဖက်ရွက်များကို အသုံးပြု၍ 
                ရိုးရာနည်းလမ်းများဖြင့် လက်ဖက်ရည်ပြုလုပ်ခြင်းဖြင့် စတင်ခဲ့ပါသည်။
              </p>
              <p className="text-gray-700 leading-relaxed">
                ယနေ့အချိန်တွင် ကျွန်ုပ်တို့သည် ဒုတိယမျိုးဆက်အဖြစ် ဖခင်၏အိပ်မက်ကို ဆက်လက်အကောင်အထည်
                ဖော်လျက်ရှိပြီး ခေတ်မီနည်းပညာများနှင့် ရိုးရာနည်းလမ်းများကို ပေါင်းစပ်ကာ ပိုမိုကောင်းမွန်သော
                လက်ဖက်ရည်များကို ပြုလုပ်ပေးလျက်ရှိပါသည်။
              </p>
            </div>
          )}

          {activeTab === "mission" && (
            <div className="space-y-4">
              <h3 className="font-myanmar text-2xl text-amber-800 mb-4">ကျွန်ုပ်တို့၏ရည်ရွယ်ချက်</h3>
              <p className="text-gray-700 leading-relaxed">
                ကျွန်ုပ်တို့၏ရည်ရွယ်ချက်မှာ ရိုးရာမြန်မာ့လက်ဖက်ရည်ယဉ်ကျေးမှုကို ထိန်းသိမ်းရန်နှင့် 
                ခေတ်သစ်လူငယ်များထံသို့ မိတ်ဆက်ပေးရန်ဖြစ်ပါသည်။
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>အရည်အသွေးမြင့် လတ်ဆတ်သောလက်ဖက်ရွက်များကို အသုံးပြုခြင်း</li>
                <li>ရိုးရာနည်းလမ်းများကို ခေတ်မီနည်းပညာဖြင့် ပေါင်းစပ်ခြင်း</li>
                <li>ကျေးလက်ဒေသမှ လယ်သမားများအား ပံ့ပိုးကူညီခြင်း</li>
                <li>သဘာဝပတ်ဝန်းကျင်နှင့် သဟဇာတဖြစ်စေရန် ကြိုးပမ်းခြင်း</li>
              </ul>
            </div>
          )}

          {activeTab === "values" && (
            <div className="space-y-4">
              <h3 className="font-myanmar text-2xl text-amber-800 mb-4">ကျွန်ုပ်တို့၏တန်ဖိုးများ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">အရည်အသွေး</h4>
                  <p className="text-gray-700 text-sm">
                    အကောင်းဆုံးသောလက်ဖက်ရွက်များကိုသာ ရွေးချယ်အသုံးပြုပါသည်
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">ရိုးရာ</h4>
                  <p className="text-gray-700 text-sm">
                    မျိုးဆက်ပေါင်းများစွာကြာ ထိန်းသိမ်းလာသော နည်းလမ်းများ
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">သစ္စာ</h4>
                  <p className="text-gray-700 text-sm">
                    ကျွန်ုပ်တို့၏ဖောက်သည်များနှင့် အသိုင်းအဝိုင်းအား သစ္စာရှိမှု
                  </p>
                </div>
                <div className="bg-amber-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">တီထွင်မှု</h4>
                  <p className="text-gray-700 text-sm">
                    ရိုးရာနှင့် ခေတ်သစ်ကို ပေါင်းစပ်သော တီထွင်မှုများ
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-16">
        <h2 className="font-myanmar text-3xl md:text-4xl text-amber-800 mb-12">
          ကျွန်ုပ်တို့၏အဖွဲ့
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { name: "ဦးအောင်မင်း", role: "တည်ထောင်သူ", emoji: "👴" },
            { name: "ဒေါ်မြမြစိန်", role: "လက်ဖက်ရည်ပညာရှင်", emoji: "👵" },
            { name: "မောင်သူရိန်", role: "ဒုတိယမျိုးဆက်", emoji: "👨" }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-amber-200 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                {member.emoji}
              </div>
              <h3 className="font-semibold text-lg text-amber-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Visit Us Section */}
      <div className="bg-amber-50 rounded-2xl p-8 text-center">
        <h2 className="font-myanmar text-3xl text-amber-800 mb-4">
          လာရောက်လည်ပတ်ကြည့်ရှုပါ
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          ကျွန်ုပ်တို့၏ပူပြင်းသောဧည့်ခံဆက်ဆံမှုနှင့် အရသာရှိသောလက်ဖက်ရည်များကို 
          ကိုယ်တိုင်လာရောက်ခံစားကြည့်ရှုပါ။
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors">
            လမ်းညွှန်ကြည့်ရှုရန်
          </button>
          <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-amber-600 hover:text-white transition-colors">
            ဆက်သွယ်ရန်
          </button>
        </div>
      </div>
    </main>
  );
}
