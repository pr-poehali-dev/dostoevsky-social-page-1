import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("bio");

  const friends = [
    { name: "Лев Толстой", role: "Писатель", avatar: "🖋️" },
    { name: "Иван Тургенев", role: "Литератор", avatar: "📚" },
    { name: "Николай Некрасов", role: "Поэт", avatar: "✍️" },
    { name: "Михаил Салтыков-Щедрин", role: "Сатирик", avatar: "📖" }
  ];

  const quotes = [
    "Красота спасёт мир",
    "Я не хочу и не могу верить, чтобы зло было нормальным состоянием людей",
    "Сострадание есть главнейший и, может быть, единственный закон бытия всего человечества",
    "Широк человек, слишком даже широк, я бы сузил"
  ];

  const activities = [
    { icon: "BookOpen", text: "Писательство и литература", desc: "Основное призвание жизни" },
    { icon: "Coffee", text: "Философские беседы", desc: "За чашкой чая" },
    { icon: "Dices", text: "Игра в карты", desc: "Увлечение и страсть" },
    { icon: "Church", text: "Духовные размышления", desc: "Вопросы веры и морали" }
  ];

  const foods = [
    { emoji: "☕", name: "Чай", desc: "Любимый напиток для работы" },
    { emoji: "🥖", name: "Чёрный хлеб", desc: "Простая русская еда" },
    { emoji: "🥣", name: "Щи", desc: "Традиционное русское блюдо" },
    { emoji: "🍰", name: "Пирожные", desc: "Сладости к чаю" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5DC] via-[#E8DCC4] to-[#D4C5A9]">
      <div className="container max-w-5xl mx-auto px-4 py-8">
        <Card className="bg-white/95 backdrop-blur shadow-2xl border-[#8B4513]/20 animate-scale-in">
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-[#8B4513] via-[#6B3410] to-[#5A2D0C] rounded-t-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <div className="flex gap-2">
                  <div className="w-12 h-12 bg-[#F5F5DC]/90 rounded-full flex items-center justify-center border-2 border-[#8B4513]/30">
                    <Icon name="BookOpen" className="text-[#8B4513]" size={24} />
                  </div>
                  <div className="w-12 h-12 bg-[#F5F5DC]/90 rounded-full flex items-center justify-center border-2 border-[#8B4513]/30">
                    <Icon name="Feather" className="text-[#8B4513]" size={24} />
                  </div>
                  <div className="w-12 h-12 bg-[#F5F5DC]/90 rounded-full flex items-center justify-center border-2 border-[#8B4513]/30">
                    <span className="text-2xl">✝️</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 pb-8">
              <div className="relative -mt-16 mb-6">
                <Avatar className="w-32 h-32 border-8 border-white shadow-xl ring-4 ring-[#8B4513]/20">
                  <AvatarImage src="https://cdn.poehali.dev/projects/9470338f-2274-4a0f-8203-3ecf0c263996/files/c21810b3-9001-4864-9db9-47d95c2feadd.jpg" alt="Ф. М. Достоевский" />
                  <AvatarFallback className="text-4xl font-display bg-[#8B4513] text-white">ФД</AvatarFallback>
                </Avatar>
              </div>

              <div className="mb-6">
                <h1 className="text-5xl font-display font-bold text-[#2C1810] mb-2">
                  Фёдор Михайлович Достоевский
                </h1>
                <p className="text-xl text-[#5A2D0C]/80 mb-3 font-light">
                  Писатель, мыслитель, философ
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-[#8B4513]/10 text-[#8B4513] border-[#8B4513]/30 hover:bg-[#8B4513]/20">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    Санкт-Петербург
                  </Badge>
                  <Badge variant="secondary" className="bg-[#8B4513]/10 text-[#8B4513] border-[#8B4513]/30 hover:bg-[#8B4513]/20">
                    <Icon name="Calendar" size={14} className="mr-1" />
                    1821 - 1881
                  </Badge>
                  <Badge variant="secondary" className="bg-[#8B4513]/10 text-[#8B4513] border-[#8B4513]/30 hover:bg-[#8B4513]/20">
                    <Icon name="BookOpen" size={14} className="mr-1" />
                    Реалист
                  </Badge>
                </div>
              </div>

              <div className="flex gap-2 mb-8 flex-wrap border-b border-[#8B4513]/20 pb-2">
                {[
                  { id: "bio", label: "Биография", icon: "User" },
                  { id: "family", label: "Семья", icon: "Heart" },
                  { id: "friends", label: "Друзья", icon: "Users" },
                  { id: "activities", label: "Занятия", icon: "Sparkles" },
                  { id: "food", label: "Еда", icon: "Coffee" },
                  { id: "quotes", label: "Цитаты", icon: "Quote" },
                  { id: "awards", label: "Награды", icon: "Award" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg font-display transition-all duration-200 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? "bg-[#8B4513] text-white shadow-md"
                        : "bg-[#8B4513]/5 text-[#5A2D0C] hover:bg-[#8B4513]/10"
                    }`}
                  >
                    <Icon name={tab.icon as any} size={16} />
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="animate-fade-in">
                {activeTab === "bio" && (
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#8B4513] pl-6 py-2">
                      <h3 className="text-2xl font-display font-bold text-[#2C1810] mb-4">Биография</h3>
                      <div className="space-y-4 text-[#5A2D0C]/90 leading-relaxed">
                        <p>
                          Родился <strong>30 октября 1821 года</strong> в Москве в семье штаб-лекаря Мариинской больницы для бедных.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "family" && (
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#8B4513] pl-6 py-2">
                      <h3 className="text-2xl font-display font-bold text-[#2C1810] mb-4">Семейное положение</h3>
                      <div className="grid gap-4">
                        <Card className="p-5 bg-gradient-to-br from-white to-[#F5F5DC]/30 border-[#8B4513]/20 hover:shadow-lg transition-all">
                          <div className="flex items-start gap-4">
                            <div className="text-4xl">💍</div>
                            <div>
                              <h4 className="font-display font-bold text-lg text-[#2C1810] mb-1">Анна Григорьевна Достоевская</h4>
                              <p className="text-sm text-[#5A2D0C]/80 mb-2">Супруга (вторая жена, с 1867 года)</p>
                              <p className="text-sm text-[#5A2D0C]/90">
                                Стенографистка, помогала записывать романы. Верная спутница и помощница, 
                                родила четверых детей. Сохранила и издала наследие мужа после его смерти.
                              </p>
                            </div>
                          </div>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-4">
                          <Card className="p-4 bg-white/50 border-[#8B4513]/20">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">👨</span>
                              <div>
                                <h5 className="font-display font-semibold text-[#2C1810]">Михаил Андреевич</h5>
                                <p className="text-sm text-[#5A2D0C]/80">Отец, штаб-лекарь</p>
                              </div>
                            </div>
                          </Card>

                          <Card className="p-4 bg-white/50 border-[#8B4513]/20">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">👩</span>
                              <div>
                                <h5 className="font-display font-semibold text-[#2C1810]">Мария Фёдоровна</h5>
                                <p className="text-sm text-[#5A2D0C]/80">Мать, из купеческого рода</p>
                              </div>
                            </div>
                          </Card>

                          <Card className="p-4 bg-white/50 border-[#8B4513]/20">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">👶</span>
                              <div>
                                <h5 className="font-display font-semibold text-[#2C1810]">Любовь Фёдоровна</h5>
                                <p className="text-sm text-[#5A2D0C]/80">Дочь, писательница</p>
                              </div>
                            </div>
                          </Card>

                          <Card className="p-4 bg-white/50 border-[#8B4513]/20">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">👦</span>
                              <div>
                                <h5 className="font-display font-semibold text-[#2C1810]">Фёдор Фёдорович</h5>
                                <p className="text-sm text-[#5A2D0C]/80">Сын</p>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "friends" && (
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#8B4513] pl-6 py-2 mb-6">
                      <h3 className="text-2xl font-display font-bold text-[#2C1810]">Друзья и знакомые</h3>
                      <p className="text-[#5A2D0C]/80 mt-2">Великие современники и литературные соратники</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {friends.map((friend, idx) => (
                        <Card key={idx} className="p-5 bg-gradient-to-br from-white to-[#F5F5DC]/30 border-[#8B4513]/20 hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-[#8B4513]/10 flex items-center justify-center text-3xl border-2 border-[#8B4513]/20">
                              {friend.avatar}
                            </div>
                            <div>
                              <h4 className="font-display font-bold text-lg text-[#2C1810]">{friend.name}</h4>
                              <p className="text-sm text-[#5A2D0C]/80">{friend.role}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "activities" && (
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#8B4513] pl-6 py-2 mb-6">
                      <h3 className="text-2xl font-display font-bold text-[#2C1810]">Любимые занятия</h3>
                      <p className="text-[#5A2D0C]/80 mt-2">Что наполняло мою жизнь смыслом</p>
                    </div>
                    <div className="grid gap-4">
                      {activities.map((activity, idx) => (
                        <Card key={idx} className="p-6 bg-gradient-to-r from-white to-[#F5F5DC]/30 border-[#8B4513]/20 hover:shadow-lg transition-all">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-lg bg-[#8B4513]/10 flex items-center justify-center border-2 border-[#8B4513]/20">
                              <Icon name={activity.icon as any} className="text-[#8B4513]" size={24} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-display font-bold text-lg text-[#2C1810] mb-1">{activity.text}</h4>
                              <p className="text-sm text-[#5A2D0C]/80">{activity.desc}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "food" && (
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#8B4513] pl-6 py-2 mb-6">
                      <h3 className="text-2xl font-display font-bold text-[#2C1810]">Любимая еда и напитки</h3>
                      <p className="text-[#5A2D0C]/80 mt-2">Простые радости русской кухни</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {foods.map((food, idx) => (
                        <Card key={idx} className="p-5 bg-gradient-to-br from-white to-[#F5F5DC]/30 border-[#8B4513]/20 hover:shadow-lg hover:scale-105 transition-all">
                          <div className="flex items-center gap-4">
                            <div className="text-5xl">{food.emoji}</div>
                            <div>
                              <h4 className="font-display font-bold text-lg text-[#2C1810]">{food.name}</h4>
                              <p className="text-sm text-[#5A2D0C]/80">{food.desc}</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "quotes" && (
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#8B4513] pl-6 py-2 mb-6">
                      <h3 className="text-2xl font-display font-bold text-[#2C1810]">Избранные цитаты</h3>
                      <p className="text-[#5A2D0C]/80 mt-2">Мысли, которыми я делился с миром</p>
                    </div>
                    <div className="space-y-4">
                      {quotes.map((quote, idx) => (
                        <Card key={idx} className="p-6 bg-gradient-to-br from-white via-[#F5F5DC]/20 to-white border-l-4 border-[#8B4513] shadow-md hover:shadow-xl transition-all">
                          <div className="flex gap-4">
                            <Icon name="Quote" className="text-[#8B4513]/30 flex-shrink-0" size={32} />
                            <p className="text-lg text-[#2C1810] font-light italic leading-relaxed">
                              {quote}
                            </p>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "awards" && (
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#8B4513] pl-6 py-2 mb-6">
                      <h3 className="text-2xl font-display font-bold text-[#2C1810]">Награды и признание</h3>
                      <p className="text-[#5A2D0C]/80 mt-2">Почести и звания при жизни</p>
                    </div>
                    <div className="grid gap-4">
                      <Card className="p-6 bg-gradient-to-r from-white to-[#F5F5DC]/30 border-[#8B4513]/20 hover:shadow-lg transition-all">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center border-4 border-[#8B4513]/20 shadow-lg">
                            <Icon name="Award" className="text-white" size={32} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-display font-bold text-xl text-[#2C1810] mb-2">Почётный академик</h4>
                            <p className="text-sm text-[#5A2D0C]/80 mb-1">Императорская Академия наук, 1877 год</p>
                            <p className="text-sm text-[#5A2D0C]/90">Избран почётным членом Отделения русского языка и словесности за выдающийся вклад в русскую литературу</p>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-6 bg-gradient-to-r from-white to-[#F5F5DC]/30 border-[#8B4513]/20 hover:shadow-lg transition-all">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C0C0C0] to-[#808080] flex items-center justify-center border-4 border-[#8B4513]/20 shadow-lg">
                            <Icon name="Medal" className="text-white" size={32} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-display font-bold text-xl text-[#2C1810] mb-2">Пушкинская премия</h4>
                            <p className="text-sm text-[#5A2D0C]/80 mb-1">Академия наук, 1880 год</p>
                            <p className="text-sm text-[#5A2D0C]/90">Награда за роман "Братья Карамазовы" — величайшее произведение русской литературы</p>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-6 bg-gradient-to-r from-white to-[#F5F5DC]/30 border-[#8B4513]/20 hover:shadow-lg transition-all">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B4513] to-[#5A2D0C] flex items-center justify-center border-4 border-[#8B4513]/20 shadow-lg">
                            <Icon name="Crown" className="text-[#FFD700]" size={32} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-display font-bold text-xl text-[#2C1810] mb-2">Признание современников</h4>
                            <p className="text-sm text-[#5A2D0C]/80 mb-1">При жизни и после смерти</p>
                            <p className="text-sm text-[#5A2D0C]/90">Знаменитая Пушкинская речь 1880 года вызвала небывалый восторг публики и признание как величайшего мыслителя эпохи</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>

        <footer className="text-center mt-8 text-[#5A2D0C]/60 text-sm font-light">
          <p>Страница создана в память о великом русском писателе и мыслителе</p>
          <p className="mt-1">1821 - 1881</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;