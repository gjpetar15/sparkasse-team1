import React, { useState } from 'react';
import Chart from 'react-apexcharts';

// Function to get chart options
const getChartOptions = (series: number[], colors: string[]) => {
    return {
      series: series,
      colors: colors,
      chart: {
        height: 320,
        width: '100%',
        type: 'donut',
      },
      stroke: {
        colors: ['transparent'],
      },
      plotOptions: {
        pie: {
          donut: {
            size: '80%',
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'bottom',
      },
    };
  };

const AdminPageStatistics = () => {
    // Doughnut 1: 48% (bg-[#2870ED]), 52% (bg-[#EB4C79])
  const chart1Options = getChartOptions([48, 52], ['#2870ED', '#EB4C79']);

  // Doughnut 2: 20% (bg-[#0CB43F]), 47% (bg-[#245375]), 16% (bg-[#FF6130]), 9% (bg-[#02A3A4]), 8% (bg-[#0050A7])
  const chart2Options = getChartOptions([20, 47, 16, 9, 8], ['#0CB43F', '#245375', '#FF6130', '#02A3A4', '#0050A7']);

  // Doughnut 3: 59% (bg-[#0CB43F]), 17% (bg-[#721C7A]), 9% (bg-[#FF6130]), 7% (bg-[#028661]), 7% (bg-[#0050A7])
  const chart3Options = getChartOptions([59, 17, 9, 7, 7], ['#0CB43F', '#721C7A', '#FF6130', '#028661', '#0050A7']);

  // Doughnut 4: 64% (bg-[#0050A7]), 36% (bg-[#EB4C79])
  const chart4Options = getChartOptions([64, 36], ['#0050A7', '#EB4C79']);

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
      <div className="flex border-r-[#E4EAF0] mt-24 border-t-[#E4EAF0] border-t-2 border-r-2 rounded-e-3xl w-[90%] ">
        <div className="w-[20%] h-full">

        </div>
        <div className="h-auto w-[80%] pb-32">
            <div className="pr-10 pt-10">
                <div className="bg-[#F1F5F7] p-5 rounded-xl">
                    <div className="flex justify-between">
                        <div className="text-[#0050A7] text-4xl font-bold">Статистики</div>
                        <button className="bg-[#0050A7] text-white">Превземи во Excel</button>
                    </div>
                </div>
                <div className="gap-5 pt-5 space-y-5">
                    <div className="flex gap-5 h-auto">
                        <div className="bg-[#F1F5F7] p-5 w-[33%] rounded-xl">
                            <div>
                                Kalendar
                            </div>
                        </div>
                        <div className="bg-[#F1F5F7] p-5 w-[33%] rounded-xl space-y-10">
                            <div className="text-[#0050A7] text-3xl">
                                Регистрирани корисници: 3421
                            </div>
                            <img className="h-36 w-44" src="./src/assets/images/AktivniKorisniciGraph.png" alt="" />
                            <div className="flex">
                                <a href="" className="bg-[#E4EAF0] text-[#0050A7] text-sm p-4 rounded-xl">Преглед на податоци</a>
                            </div>
                        </div>
                        <div className="bg-[#F1F5F7] p-5 w-[33%] rounded-xl space-y-10">
                            <div className="text-[#0050A7] text-3xl">
                                Активни корисници: 2455
                            </div>
                            <img className="h-[174px] w-72 mt-5" src="./src/assets/images/AktivniKorisniciGraph.png" alt="" />
                            <div className="flex">
                                <a href="" className="bg-[#E4EAF0] text-[#0050A7] text-sm p-4 rounded-xl">Преглед на податоци</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 h-auto">
                        <div className="text-[#0050A7] bg-[#F1F5F7] p-5 w-[70%] space-y-10 rounded-xl">
                            <div className="text-3xl">
                                Употреба на платформа.
                            </div>
                            <img src="./src/assets/images/UpotrebaPlatformaGraph.png" alt="" />
                            <button className="bg-[#E4EAF0] text-[#0050A7]">Превземи во Excel</button>
                        </div>
                        <div className="bg-[#F1F5F7] p-5 w-[30%] rounded-xl space-y-10">
                            <div className="text-[#0050A7] text-3xl">
                                Просечно време: 2ч
                            </div>
                            <img className="h-[174px] w-72 mt-5" src="./src/assets/images/AktivniKorisniciGraph.png" alt="" />
                        </div>
                    </div>
                    <div className="bg-[#F1F5F7] text-[#0050A7]  p-5 rounded-xl">
                        <div className="text-[#0050A7] text-3xl">Пол</div>
                        <div className="flex justify-between pt-10">
                                <div className="items-center justify-between">
                                    <div className="space-y-5 border-l-[#0050A7] border-l-2 pl-10">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span>1.</span>
                                                <span>Машки</span>
                                            </div>
                                            <div className="flex items-center space-x-4 pl-10">
                                                <div className="w-96 h-2 bg-gray-200 rounded-full">
                                                <div className="h-2 bg-[#2870ED] rounded-full" style={{ width: '48%' }}></div>
                                            </div>
                                                <span>48%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span>2.</span>
                                                <span>Женски</span>
                                            </div>
                                            <div className="flex items-center space-x-4 pl-10">
                                                <div className="w-96 h-2 bg-gray-200 rounded-full">
                                                    <div className="h-2 bg-[#EB4C79] rounded-full" style={{ width: '52%' }}></div>
                                                </div>
                                                <span>52%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span>3.</span>
                                                <span>Друго</span>
                                            </div>
                                            <div className="flex items-center justify-center space-x-4">
                                                <div className="w-96 h-2 bg-gray-200 rounded-full">
                                                    <div className="h-2 rounded-full" style={{ width: '0%' }}></div>
                                                </div>
                                                <span>0%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none">
                                    <path d="M232.997 187.942C241.544 173.277 247.015 157.024 249.075 140.176C251.136 123.327 249.744 106.235 244.983 89.9426C240.223 73.6497 232.194 58.4971 221.386 45.4087C210.578 32.3202 197.217 21.57 182.119 13.8137C167.021 6.0573 150.501 1.45723 133.567 0.29391C116.633 -0.869408 99.639 1.42841 83.6219 7.04725C67.6048 12.6661 52.8998 21.4883 40.4036 32.9758C27.9074 44.4634 17.8817 58.3757 10.9379 73.8645L33.7503 84.0916C39.3054 71.7006 47.3259 60.5707 57.3229 51.3807C67.3198 42.1906 79.0838 35.1329 91.8975 30.6378C104.711 26.1427 118.306 24.3045 131.853 25.2351C145.401 26.1658 158.617 29.8458 170.695 36.0509C182.774 42.256 193.462 50.8561 202.109 61.3269C210.755 71.7977 217.178 83.9198 220.987 96.9541C224.795 109.988 225.909 123.662 224.26 137.141C222.612 150.619 218.235 163.621 211.398 175.353L232.997 187.942Z" fill="#EB4C79"/>
                                    <path d="M233.319 187.386C217.306 215.188 191.217 235.769 160.45 244.868C129.684 253.967 96.5964 250.887 68.0375 236.267C39.4787 221.646 17.6351 196.604 7.02836 166.324C-3.57834 136.044 -2.13594 102.845 11.057 73.5997L33.8456 83.8798C23.2913 107.276 22.1373 133.836 30.6227 158.059C39.108 182.283 56.5829 202.317 79.43 214.013C102.277 225.71 128.747 228.173 153.36 220.894C177.973 213.615 198.845 197.15 211.655 174.909L233.319 187.386Z" fill="#0050A7"/>
                                    </svg>
                                </div>
                        </div>
                        <button className="bg-[#E4EAF0] text-[#0050A7]">Превземи во Excel</button>
                    </div>
                    <div className="bg-[#F1F5F7] text-[#0050A7]  p-5 rounded-xl">
                        <div className="text-[#0050A7] text-3xl">Возраст</div>
                        <div className="flex justify-between pt-10">
                                <div className="items-center justify-between">
                                    <div className="space-y-5 border-l-[#0050A7] border-l-2 pl-10">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span>1.</span>
                                                <span>15-20 години</span>
                                            </div>
                                            <div className="flex items-center space-x-4 pl-10">
                                                <div className="w-96 h-2 bg-gray-200 rounded-full">
                                                <div className="h-2 bg-[#0CB43F] rounded-full" style={{ width: '20%' }}></div>
                                            </div>
                                                <span>20%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span>2.</span>
                                                <span>20-25 години</span>
                                            </div>
                                            <div className="flex items-center space-x-4 pl-10">
                                                <div className="w-96 h-2 bg-gray-200 rounded-full">
                                                    <div className="h-2 bg-[#245375] rounded-full" style={{ width: '47%' }}></div>
                                                </div>
                                                <span>47%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span>3.</span>
                                                <span>25-30 години</span>
                                            </div>
                                            <div className="flex items-center justify-center space-x-4">
                                                <div className="w-96 h-2 bg-gray-200 rounded-full">
                                                    <div className="h-2 bg-[#FF6130] rounded-full" style={{ width: '16%' }}></div>
                                                </div>
                                                <span>16%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span>4.</span>
                                                <span>30-35 години</span>
                                            </div>
                                            <div className="flex items-center justify-center space-x-4">
                                                <div className="w-96 h-2 bg-gray-200 rounded-full">
                                                    <div className="h-2 bg-[#02A3A4] rounded-full" style={{ width: '9%' }}></div>
                                                </div>
                                                <span>9%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span>5.</span>
                                                <span>35+ години</span>
                                            </div>
                                            <div className="flex items-center justify-center space-x-4">
                                                <div className="w-96 h-2 bg-gray-200 rounded-full">
                                                    <div className="h-2 bg-[#0050A7] rounded-full" style={{ width: '8%' }}></div>
                                                </div>
                                                <span>8%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none">
                                        <path d="M231.625 59.7605C220.388 41.3955 204.598 26.2441 185.785 15.7745C166.972 5.30491 145.773 -0.12796 124.244 0.00228736L124.395 25.0018C141.619 24.8976 158.577 29.2439 173.628 37.6196C188.678 45.9953 201.31 58.1164 210.3 72.8084L231.625 59.7605Z" fill="#721C7A"/>
                                        <path d="M125 0C96.4407 -3.40566e-07 68.7425 9.77964 46.5146 27.7115C24.2867 45.6434 8.86948 70.6462 2.82845 98.5593L27.2628 103.847C32.0956 81.517 44.4294 61.5147 62.2117 47.1692C79.994 32.8237 102.153 25 125 25V0Z" fill="#0CB43F"/>
                                        <path d="M231.51 59.5735C243.279 78.7324 249.662 100.711 249.987 123.194C250.312 145.676 244.566 167.83 233.356 187.321L211.685 174.857C220.653 159.264 225.249 141.541 224.99 123.555C224.73 105.569 219.623 87.9859 210.208 72.6588L231.51 59.5735Z" fill="#FF6130"/>
                                        <path d="M233.319 187.386C218.389 213.309 194.657 233.018 166.433 242.933C138.209 252.849 107.365 252.314 79.5019 241.426C51.6389 230.537 28.6048 210.017 14.5826 183.592C0.560367 157.167 -3.51999 126.589 3.08251 97.4115L27.466 102.929C22.184 126.271 25.4483 150.733 36.6661 171.873C47.8838 193.014 66.3111 209.43 88.6016 218.141C110.892 226.851 135.567 227.279 158.146 219.347C180.726 211.414 199.711 195.647 211.655 174.909L233.319 187.386Z" fill="#028661"/>
                                    </svg>
                                </div>
                        </div>
                        <button className="bg-[#E4EAF0] text-[#0050A7]">Превземи во Excel</button>
                    </div>
                    <div className="bg-[#F1F5F7] text-[#0050A7]  p-5 rounded-xl">
                        <div className="text-[#0050A7] text-3xl">Место на живеење</div>
                        <div className="flex justify-between pt-10">
                                <div className="items-center justify-between">
                                    <div className="space-y-5 border-l-[#0050A7] border-l-2 pl-10">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span>1.</span>
                                                <span>Скопје</span>
                                            </div>
                                            <div className="flex items-center space-x-4 pl-10">
                                                <div className="w-96 h-2 bg-gray-200 rounded-full">
                                                <div className="h-2 bg-[#0CB43F] rounded-full" style={{ width: '59%' }}></div>
                                            </div>
                                                <span>59%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span>2.</span>
                                                <span>Прилеп</span>
                                            </div>
                                            <div className="flex items-center space-x-4 pl-10">
                                                <div className="w-96 h-2 bg-gray-200 rounded-full">
                                                    <div className="h-2 bg-[#721C7A] rounded-full" style={{ width: '17%' }}></div>
                                                </div>
                                                <span>17%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span>3.</span>
                                                <span>Велес</span>
                                            </div>
                                            <div className="flex items-center justify-center space-x-4">
                                                <div className="w-96 h-2 bg-gray-200 rounded-full">
                                                    <div className="h-2 bg-[#FF6130] rounded-full" style={{ width: '9%' }}></div>
                                                </div>
                                                <span>9%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span>4.</span>
                                                <span>Охрид</span>
                                            </div>
                                            <div className="flex items-center justify-center space-x-4">
                                                <div className="w-96 h-2 bg-gray-200 rounded-full">
                                                    <div className="h-2 bg-[#028661] rounded-full" style={{ width: '7%' }}></div>
                                                </div>
                                                <span>7%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span>5.</span>
                                                <span>Битола</span>
                                            </div>
                                            <div className="flex items-center justify-center space-x-4">
                                                <div className="w-96 h-2 bg-gray-200 rounded-full">
                                                    <div className="h-2 bg-[#0050A7] rounded-full" style={{ width: '7%' }}></div>
                                                </div>
                                                <span>7%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none">
                                        <path d="M190.239 231.625C208.605 220.388 223.756 204.598 234.225 185.785C244.695 166.972 250.128 145.773 249.998 124.244L224.998 124.395C225.102 141.619 220.756 158.577 212.38 173.628C204.005 188.678 191.884 201.31 177.192 210.3L190.239 231.625Z" fill="#721C7A"/>
                                        <path d="M250 125C250 107.851 246.471 90.8858 239.634 75.1591C232.796 59.4324 222.795 45.2809 210.254 33.5848C197.713 21.8888 182.899 12.8983 166.734 7.17278C150.569 1.44723 133.399 -0.890957 116.292 0.303661L118.034 25.2429C131.72 24.2872 145.456 26.1578 158.387 30.7382C171.319 35.3187 183.17 42.511 193.203 51.8679C203.236 61.2247 211.237 72.5459 216.707 85.1273C222.177 97.7086 225 111.281 225 125L250 125Z" fill="#0CB43F"/>
                                        <path d="M190.427 231.51C171.268 243.279 149.289 249.662 126.806 249.987C104.324 250.312 82.1698 244.566 62.6787 233.356L75.143 211.685C90.7358 220.653 108.459 225.249 126.445 224.99C144.431 224.73 162.014 219.623 177.341 210.208L190.427 231.51Z" fill="#FF6130"/>
                                        <path d="M62.6142 233.319C39.3286 219.908 20.9846 199.35 10.302 174.693C-0.380545 150.036 -2.83304 122.593 3.30816 96.4325C9.44938 70.2722 23.8573 46.7872 44.3959 29.4595C64.9345 12.1319 90.5102 1.88406 117.331 0.235463L118.865 25.1884C97.4081 26.5072 76.9476 34.7055 60.5167 48.5676C44.0859 62.4297 32.5595 81.2177 27.6465 102.146C22.7336 123.074 24.6956 145.029 33.2416 164.754C41.7877 184.48 56.4629 200.926 75.0913 211.655L62.6142 233.319Z" fill="#028661"/>
                                    </svg>
                                </div>
                        </div>
                        <button className="bg-[#E4EAF0] text-[#0050A7]">Превземи во Excel</button>
                    </div>
                    <div className="bg-[#F1F5F7] text-[#0050A7]  p-5 rounded-xl">
                        <div className="text-[#0050A7] text-3xl">Кориснички уред</div>
                        <div className="flex justify-between pt-10">
                                <div className="items-center justify-between">
                                    <div className="space-y-5 border-l-[#0050A7] border-l-2 pl-10">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span>1.</span>
                                                <span>Десктоп</span>
                                            </div>
                                            <div className="flex items-center space-x-4 pl-10">
                                                <div className="w-96 h-2 bg-gray-200 rounded-full">
                                                <div className="h-2 bg-[#0050A7] rounded-full" style={{ width: '64%' }}></div>
                                            </div>
                                                <span>64%</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <span>2.</span>
                                                <span>Мобил</span>
                                            </div>
                                            <div className="flex items-center space-x-4 pl-10">
                                                <div className="w-96 h-2 bg-gray-200 rounded-full">
                                                    <div className="h-2 bg-[#EB4C79] rounded-full" style={{ width: '36%' }}></div>
                                                </div>
                                                <span>36%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250" fill="none">
                                    <path d="M232.997 187.942C241.544 173.277 247.015 157.024 249.075 140.176C251.136 123.327 249.744 106.235 244.983 89.9426C240.223 73.6497 232.194 58.4971 221.386 45.4087C210.578 32.3202 197.217 21.57 182.119 13.8137C167.021 6.0573 150.501 1.45723 133.567 0.29391C116.633 -0.869408 99.639 1.42841 83.6219 7.04725C67.6048 12.6661 52.8998 21.4883 40.4036 32.9758C27.9074 44.4634 17.8817 58.3757 10.9379 73.8645L33.7503 84.0916C39.3054 71.7006 47.3259 60.5707 57.3229 51.3807C67.3198 42.1906 79.0838 35.1329 91.8975 30.6378C104.711 26.1427 118.306 24.3045 131.853 25.2351C145.401 26.1658 158.617 29.8458 170.695 36.0509C182.774 42.256 193.462 50.8561 202.109 61.3269C210.755 71.7977 217.178 83.9198 220.987 96.9541C224.795 109.988 225.909 123.662 224.26 137.141C222.612 150.619 218.235 163.621 211.398 175.353L232.997 187.942Z" fill="#EB4C79"/>
                                    <path d="M233.319 187.386C217.306 215.188 191.217 235.769 160.45 244.868C129.684 253.967 96.5964 250.887 68.0375 236.267C39.4787 221.646 17.6351 196.604 7.02836 166.324C-3.57834 136.044 -2.13594 102.845 11.057 73.5997L33.8456 83.8798C23.2913 107.276 22.1373 133.836 30.6227 158.059C39.108 182.283 56.5829 202.317 79.43 214.013C102.277 225.71 128.747 228.173 153.36 220.894C177.973 213.615 198.845 197.15 211.655 174.909L233.319 187.386Z" fill="#0050A7"/>
                                    </svg>
                                </div>
                        </div>
                        <button className="bg-[#E4EAF0] text-[#0050A7]">Превземи во Excel</button>
                    </div>
                    {/* <TrafficChart /> */}
                    {/* <div className="max-w-sm w-full bg-white rounded-lg shadow p-6">
                        <div className="py-6">
                            <Chart options={chartOptions} series={chartOptions.series} type="donut" height={320} />
                        </div>
                    </div> */}
                    {/* First Doughnut */}
      <div className="max-w-sm w-full bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900">Doughnut Chart 1</h2>
        <div className="py-6">
          <Chart options={chart1Options} series={chart1Options.series} type="donut" height={320} />
        </div>
      </div>

      {/* Second Doughnut */}
      <div className="max-w-sm w-full bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900">Doughnut Chart 2</h2>
        <div className="py-6">
          <Chart options={chart2Options} series={chart2Options.series} type="donut" height={320} />
        </div>
      </div>

      {/* Third Doughnut */}
      <div className="max-w-sm w-full bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900">Doughnut Chart 3</h2>
        <div className="py-6">
          <Chart options={chart3Options} series={chart3Options.series} type="donut" height={320} />
        </div>
      </div>

      {/* Fourth Doughnut */}
      <div className="max-w-sm w-full bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-900">Doughnut Chart 4</h2>
        <div className="py-6">
          <Chart options={chart4Options} series={chart4Options.series} type="donut" height={320} />
        </div>
      </div>
                </div>
            </div>
        </div>
      </div>
      <div className="w-[10%]">

      </div>
    </div>
  );
};

export default AdminPageStatistics;