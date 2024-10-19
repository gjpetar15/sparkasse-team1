import React from "react";

const AdminPageMain = () => {
  return (
    <div className="">
      <div className="flex px-auto py-10 justify-end items-end top-0 right-0 absolute">
        <div className="flex gap-[46px] pr-10">
            <div className="flex">
                <img className="w-[40px] h-[40px] rounded-lg" src="./src/assets/images/adminProfile.jpeg" alt="" />
            </div>
            <div className="flex text-[#0050A7] pt-2">
                Емилија
            </div>
            <div className="flex pt-4">
                <img className="w-[14px] h-[8px] "src="./src/assets/images/Vector.png" alt="" />
            </div>
        </div>
      </div>
      <div className="flex border-r-[#E4EAF0] mt-24 border-t-[#E4EAF0] border-t-2 border-r-2 rounded-e-3xl">
        <div className="bg-gray-900 w-[15%] h-full">

        </div>
        <div className="h-auto w-[80%] pb-32">
            <div className="w-full pt-10">
                <div className="bg-[#F1F5F7] p-10 rounded-xl">
                    <div className="flex justify-between">
                        <div className="text-[#0050A7] text-4xl font-bold">Добредојде назад, Емилија!</div>
                        <button className="bg-[#0050A7] text-white">Превземи во Excel</button>
                    </div>
                    <p className="text-[#0050A7] pt-10">Види што сработија студентите во последниот период!</p>
                </div>
                <div className="gap-5 pt-5 space-y-5">
                    <div className="flex gap-5 h-auto">
                        <div className="bg-[#F1F5F7] p-5 w-[30%] rounded-xl">
                            <div>
                                Kalendar
                            </div>
                        </div>
                        <div className="text-[#0050A7] bg-[#F1F5F7] p-5 w-[70%] space-y-10 rounded-xl">
                            <div className="text-3xl">
                                Употреба на платформа.
                            </div>
                            <img src="./src/assets/images/UpotrebaPlatformaGraph.png" alt="" />
                            <button className="bg-[#E4EAF0] text-[#0050A7]">Преглед на податоци</button>
                        </div>
                    </div>
                    <div className="flex gap-5 h-auto">
                        <div className="bg-[#F1F5F7] p-5 w-[30%] rounded-xl space-y-10">
                            <div className="text-[#0050A7] text-xl">
                                Активни корисници
                            </div>
                            <img className="h-[174px] w-72 mt-5" src="./src/assets/images/AktivniKorisniciGraph.png" alt="" />
                            <a href="" className="bg-[#E4EAF0] text-[#0050A7] text-sm p-4 rounded-xl mt-10">Превземи целосна листа</a>
                        </div>
                        <div className="text-[#0050A7] bg-[#F1F5F7] p-5 w-[70%] space-y-14 rounded-xl">
                            <div className="text-3xl">
                                Број на добиени сертификати по курс.
                            </div>
                            <div className="border-l-[#0050A7] border-l-2 text-[#0050A7] w-full flex-row px-5">
                                    <div className="flex justify-between">
                                        <span>1.</span><span>Финансии за стартапи: Како да го стартуваш својот бизнис?</span><span>322</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>2.</span><span>Буџетирање за претприемачи: Како да останеш во зелено?</span><span>211</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>3.</span><span>Како да ги оптимизираш трошоците и да генерираш профит?</span><span>202</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>4.</span><span>Менаџирање на паричен тек - Клучот за успешен бизнис!</span><span>183</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>5.</span><span>Како да инвестираш во својот бизнис и да го складираш?</span><span>144</span>
                                    </div>
                            </div>
                            <button className="bg-[#E4EAF0] text-[#0050A7]">Превземи целосна листа</button>
                        </div>
                    </div>
                    <div className="flex gap-5 h-auto">
                        <div className="bg-[#F1F5F7] p-5 w-[30%] rounded-xl">
                            <div className="text-[#0050A7] text-3xl pb-14">
                                Број на добиени беџови.
                            </div>
                            <div className="border-l-[#0050A7] border-l-2 text-[#0050A7] w-full flex-row pl-5">
                                    <div className="flex justify-between">
                                        <span>1.</span><span>Финансиски Пионер</span><span>1022</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>2.</span><span>Лидер на Иднината</span><span>517</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>3.</span><span>Стратешки Визионер</span><span>302</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>4.</span><span>CEO</span><span>192</span>
                                    </div>
                            </div>
                        </div>
                        <div className="text-[#0050A7] bg-[#F1F5F7] w-[70%] space-y-5 rounded-xl p-5">
                            <div className="text-3xl pt-3">
                                5 најдобри студенти.
                            </div>
                            <div className="space-y-5 border-l-[#0050A7] border-l-2 w-full justify-between pl-3">
                                {/* Student 1 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <span>1.</span>
                                        <img className="w-10 h-10 rounded-xl border-2 border-[#FF6130]" src="./src/assets/images/Person1.png" alt="Емилија Јорданова" />
                                        <span>Емилија Јорданова</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-96 h-2 bg-gray-200 rounded-full">
                                        <div className="h-2 bg-[#FF6130] rounded-full" style={{ width: '100%' }}></div>
                                    </div>
                                        <span>100%</span>
                                    </div>
                                </div>

                                    {/* Student 2 */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <span>2.</span>
                                            <img className="w-10 h-10 rounded-xl border-2 border-[#0CB43F]" src="./src/assets/images/Person1.png" alt="Надија Попоска" />
                                            <span>Надија Попоска</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-96 h-2 bg-gray-200 rounded-full">
                                            <div className="h-2 bg-[#6FCF97] rounded-full" style={{ width: '98%' }}></div>
                                            </div>
                                            <span>98%</span>
                                        </div>
                                    </div>

                                    {/* Student 3 */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <span>3.</span>
                                            <img className="w-10 h-10 rounded-xl border-2 border-[#0CB43F]" src="./src/assets/images/Person1.png" alt="Антонио Пановски" />
                                            <span>Антонио Пановски</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-96 h-2 bg-gray-200 rounded-full">
                                            <div className="h-2 bg-[#6FCF97] rounded-full" style={{ width: '90%' }}></div>
                                            </div>
                                            <span>90%</span>
                                        </div>
                                    </div>

                                    {/* Student 4 */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <span>4.</span>
                                            <img className="w-10 h-10 rounded-xl border-2 border-[#0CB43F]" src="./src/assets/images/Person1.png" alt="Искра Целакоска" />
                                            <span>Искра Целакоска</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-96 h-2 bg-gray-200 rounded-full">
                                            <div className="h-2 bg-[#6FCF97] rounded-full" style={{ width: '83%' }}></div>
                                            </div>
                                            <span>83%</span>
                                        </div>
                                    </div>

                                    {/* Student 5 */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <span>5.</span>
                                            <img className="w-10 h-10 rounded-xl border-2 border-[#0CB43F]" src="./src/assets/images/Person1.png" alt="Кристијан Андреев" />
                                            <span>Кристијан Андреев</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-96 h-2 bg-gray-200 rounded-full">
                                            <div className="h-2 bg-[#6FCF97] rounded-full" style={{ width: '80%' }}></div>
                                            </div>
                                            <span>80%</span>
                                        </div>
                                    </div>
                            </div>
                            <button className="bg-[#E4EAF0] text-[#0050A7]">Превземи целосна листа</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPageMain;