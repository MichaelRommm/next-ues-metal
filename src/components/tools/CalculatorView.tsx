'use client';

import { useState } from 'react';
import { calculateWeldingParams, calculatePlateWeight, calculateProfileWeight, convertInchToMm } from '@/app/actions';

export default function CalculatorView() {
    const [weldResult, setWeldResult] = useState<string>('');
    const [weightResult, setWeightResult] = useState<string>('');
    const [profileResult, setProfileResult] = useState<string>('');
    const [convertResult, setConvertResult] = useState<string>('');

    // Welding Params State
    const [method, setMethod] = useState('stick');
    const [thickness, setThickness] = useState('');
    const [elecType, setElecType] = useState('6013');
    const [material, setMaterial] = useState('steel');
    const [tigMaterial, setTigMaterial] = useState('steel');

    // Weight Calc State
    const [plateMat, setPlateMat] = useState('7.85');
    const [plateL, setPlateL] = useState('');
    const [plateW, setPlateW] = useState('');
    const [plateT, setPlateT] = useState('');

    // Profile State
    const [profileType, setProfileType] = useState('8.1'); // IPE 100 default
    const [profileLength, setProfileLength] = useState('');

    // RHS/SHS Profile State
    const [rhsWidth, setRhsWidth] = useState('');
    const [rhsHeight, setRhsHeight] = useState('');
    const [rhsThickness, setRhsThickness] = useState('');
    const [rhsLength, setRhsLength] = useState('');
    const [rhsResult, setRhsResult] = useState('');

    // Converter State
    const [inchVal, setInchVal] = useState('');


    async function handleWeldCalc() {
        // Determine effective material/electrode based on method
        let mat = 'steel';
        let elec = '';

        if (method === 'stick') elec = elecType;
        if (method === 'mig') mat = material;
        if (method === 'tig') mat = tigMaterial;

        const res = await calculateWeldingParams(method, Number(thickness), mat, elec);
        if (res.error) {
            setWeldResult(`שגיאה: ${res.error}`);
        } else {
            setWeldResult(res.result || '');
        }
    }

    async function handleWeightCalc() {
        const res = await calculatePlateWeight(Number(plateMat), Number(plateL), Number(plateW), Number(plateT));
        if (res.error) {
            setWeightResult("נא להזין נתונים");
        } else {
            setWeightResult(`משקל משוער: ${res.weight} ק"ג`);
        }
    }

    async function handleProfileCalc() {
        const res = await calculateProfileWeight(Number(profileType), Number(profileLength));
        if (res.error) {
            setProfileResult("נא להזין אורך");
        } else {
            setProfileResult(`משקל כולל: ${res.weight} ק"ג`);
        }
    }

    function handleRhsCalc() {
        const w = Number(rhsWidth);
        const h = Number(rhsHeight);
        const t = Number(rhsThickness);
        const l = Number(rhsLength);

        if (!w || !h || !t || !l) {
            setRhsResult("נא להזין את כל הנתונים");
            return;
        }

        // Calculation: (2 * (W + H) - 4 * T) * T * Length * Density (7.85) / 1000000 (mm to m conversion correction)
        // Simplified: Volume in m3 * 7850
        // Perimeter (approx) = 2*W + 2*H
        // Area (approx) = Perimeter * T
        // Better formula for hollow section area: A = 2*t*(b + h - 2*t)
        // Let's use simple approximation: Area = (W*H) - ((W-2t)*(H-2t))
        const areaMm2 = (w * h) - ((w - 2 * t) * (h - 2 * t));

        // Convert Area from mm² to m²: divide by 1,000,000
        const areaM2 = areaMm2 / 1000000;

        // Volume in m³ = Area (m²) * Length (m)
        const volumeM3 = areaM2 * l;

        const weight = volumeM3 * 7850; // Steel density (kg/m³)

        setRhsResult(`משקל כולל: ${weight.toFixed(2)} ק"ג`);
    }

    async function handleConvert() {
        // Just for consistency with 'security', we call server even for unit conversion so logic is hidden
        const res = await convertInchToMm(Number(inchVal));
        if (res.error) {
            setConvertResult("ערך לא תקין");
        } else {
            setConvertResult(`${res.mm} מ"מ  |  ${res.cm} ס"מ`);
        }
    }


    // We no longer need 'openCalc' state because 'details' element handles it natively for multiple open items

    return (
        <div className="space-y-6 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Main Header matching Legacy/Physics style */}
            <div className="bg-[#1e1e1e] border border-[#333] rounded-xl p-6 shadow-lg">
                <h2 className="text-[#ff6d00] border-r-4 border-[#ff6d00] pr-4 text-2xl font-bold mb-6">
                    🧰 ארגז כלים ומחשבונים
                </h2>

                <div className="space-y-4">

                    {/* 1. Welding Params Calculator */}
                    <details className="bg-[#252525] p-3 rounded-lg border border-transparent open:border-[#444] group cursor-pointer" open>
                        <summary className="font-bold text-white flex justify-between list-none items-center">
                            מחשבון פרמטרים (A/V)
                            <span className="text-[#ff6d00] text-xl group-open:hidden">+</span>
                            <span className="text-[#ff6d00] text-xl hidden group-open:block">-</span>
                        </summary>

                        <div className="mt-4 border-t border-[#333] pt-4 cursor-default" onClick={(e) => e.stopPropagation()}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-1">שיטה:</label>
                                    <select
                                        value={method}
                                        onChange={(e) => setMethod(e.target.value)}
                                        className="w-full bg-black border border-[#444] text-white p-3 rounded-lg"
                                    >
                                        <option value="stick">אלקטרודה (Stick)</option>
                                        <option value="mig">MIG (ריתוך סליל)</option>
                                        <option value="tig">TIG (ארגון)</option>
                                    </select>
                                </div>

                                {method === 'stick' && (
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-1">סוג אלקטרודה (2.5 מ"מ):</label>
                                        <select
                                            value={elecType}
                                            onChange={(e) => setElecType(e.target.value)}
                                            className="w-full bg-black border border-[#444] text-white p-3 rounded-lg border-l-4 border-l-[#ff6b00]"
                                        >
                                            <option value="6013">6013 (מסגרות)</option>
                                            <option value="7018">7018 (קונסטרוקציה)</option>
                                            <option value="6010">6010 (שורש)</option>
                                        </select>
                                    </div>
                                )}

                                {method === 'mig' && (
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-1">חומר:</label>
                                        <select
                                            value={material}
                                            onChange={(e) => setMaterial(e.target.value)}
                                            className="w-full bg-black border border-[#444] text-white p-3 rounded-lg"
                                        >
                                            <option value="steel">ברזל (Steel)</option>
                                            <option value="aluminum">אלומיניום (Aluminum)</option>
                                        </select>
                                    </div>
                                )}

                                {method === 'tig' && (
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-1">חומר:</label>
                                        <select
                                            value={tigMaterial}
                                            onChange={(e) => setTigMaterial(e.target.value)}
                                            className="w-full bg-black border border-[#444] text-white p-3 rounded-lg"
                                        >
                                            <option value="steel">ברזל (Carbon Steel)</option>
                                            <option value="stainless">נירוסטה (Stainless)</option>
                                            <option value="aluminum">אלומיניום (Aluminum)</option>
                                        </select>
                                    </div>
                                )}

                                <div>
                                    <label className="block text-gray-400 text-sm mb-1">עובי חומר (מ"מ):</label>
                                    <input
                                        type="number"
                                        value={thickness}
                                        onChange={(e) => setThickness(e.target.value)}
                                        className="w-full bg-black border border-[#444] text-white p-3 rounded-lg"
                                        placeholder="למשל: 3"
                                    />
                                </div>

                                <button
                                    onClick={handleWeldCalc}
                                    className="w-full bg-gradient-to-r from-[#ff6b00] to-[#ff9100] text-black font-bold p-4 rounded-lg mt-2 hover:opacity-90 transition-opacity"
                                >
                                    חשב נתונים
                                </button>

                                {weldResult && (
                                    <div className="mt-4 p-4 bg-black border border-[#2962ff] text-[#2962ff] rounded-lg whitespace-pre-line text-center font-bold">
                                        {weldResult}
                                    </div>
                                )}
                            </div>
                        </div>
                    </details>

                    {/* 2. Weight Calculator */}
                    <details className="bg-[#252525] p-3 rounded-lg border border-transparent open:border-[#444] group cursor-pointer">
                        <summary className="font-bold text-white flex justify-between list-none items-center">
                            מחשבון משקל פחים
                            <span className="text-[#ff6d00] text-xl group-open:hidden">+</span>
                            <span className="text-[#ff6d00] text-xl hidden group-open:block">-</span>
                        </summary>
                        <div className="mt-4 border-t border-[#333] pt-4 cursor-default" onClick={(e) => e.stopPropagation()}>
                            <div className="space-y-4">
                                <select
                                    value={plateMat}
                                    onChange={(e) => setPlateMat(e.target.value)}
                                    className="w-full bg-black border border-[#444] text-white p-3 rounded-lg"
                                >
                                    <option value="7.85">ברזל/פלדה (7.85)</option>
                                    <option value="2.7">אלומיניום (2.7)</option>
                                    <option value="7.9">נירוסטה 304 (7.9)</option>
                                </select>

                                <div className="flex gap-2">
                                    <input type="number" value={plateL} onChange={e => setPlateL(e.target.value)} placeholder="אורך (מ')" className="w-1/2 bg-black border border-[#444] text-white p-3 rounded-lg" />
                                    <input type="number" value={plateW} onChange={e => setPlateW(e.target.value)} placeholder="רוחב (מ')" className="w-1/2 bg-black border border-[#444] text-white p-3 rounded-lg" />
                                </div>
                                <input type="number" value={plateT} onChange={e => setPlateT(e.target.value)} placeholder="עובי (מ''מ)" className="w-full bg-black border border-[#444] text-white p-3 rounded-lg" />

                                <button onClick={handleWeightCalc} className="w-full bg-gray-700 text-white font-bold p-4 rounded-lg hover:bg-gray-600">
                                    חשב משקל
                                </button>

                                {weightResult && (
                                    <div className="mt-4 p-4 bg-black border border-gray-600 text-white rounded-lg text-center font-bold">
                                        {weightResult}
                                    </div>
                                )}
                            </div>
                        </div>
                    </details>

                    {/* 3. Profile Calculator */}
                    <details className="bg-[#252525] p-3 rounded-lg border border-transparent open:border-[#444] group cursor-pointer">
                        <summary className="font-bold text-white flex justify-between list-none items-center">
                            מחשבון פרופילים (IPE/UPN)
                            <span className="text-[#ff6d00] text-xl group-open:hidden">+</span>
                            <span className="text-[#ff6d00] text-xl hidden group-open:block">-</span>
                        </summary>
                        <div className="mt-4 border-t border-[#333] pt-4 cursor-default" onClick={(e) => e.stopPropagation()}>
                            <div className="space-y-4">
                                <p className="text-xs text-gray-500">חישוב משוער לפרופילים סטנדרטיים</p>
                                <select
                                    value={profileType}
                                    onChange={(e) => setProfileType(e.target.value)}
                                    className="w-full bg-black border border-[#444] text-white p-3 rounded-lg"
                                >
                                    <option value="8.1">IPE 100</option>
                                    <option value="10.4">IPE 120</option>
                                    <option value="12.9">IPE 140</option>
                                    <option value="15.8">IPE 160</option>
                                    <option value="18.8">IPE 180</option>
                                    <option value="22.4">IPE 200</option>
                                    <option value="10.6">UPN 100</option>
                                    <option value="13.4">UPN 120</option>
                                    <option value="16.0">UPN 140</option>
                                    <option value="18.8">UPN 160</option>
                                    <option value="22.0">UPN 180</option>
                                    <option value="25.3">UPN 200</option>
                                </select>

                                <input type="number" value={profileLength} onChange={e => setProfileLength(e.target.value)} placeholder="אורך כולל (מטרים)" className="w-full bg-black border border-[#444] text-white p-3 rounded-lg" />

                                <button onClick={handleProfileCalc} className="w-full bg-gray-700 text-white font-bold p-4 rounded-lg hover:bg-gray-600">
                                    חשב משקל כולל
                                </button>

                                {profileResult && (
                                    <div className="mt-4 p-4 bg-black border border-gray-600 text-white rounded-lg text-center font-bold">
                                        {profileResult}
                                    </div>
                                )}
                            </div>
                        </div>
                    </details>

                    {/* 4. RHS/SHS Calculator */}
                    <details className="bg-[#252525] p-3 rounded-lg border border-transparent open:border-[#444] group cursor-pointer">
                        <summary className="font-bold text-white flex justify-between list-none items-center">
                            מחשבון פרופיל מרובע/מלבני
                            <span className="text-[#ff6d00] text-xl group-open:hidden">+</span>
                            <span className="text-[#ff6d00] text-xl hidden group-open:block">-</span>
                        </summary>
                        <div className="mt-4 border-t border-[#333] pt-4 cursor-default" onClick={(e) => e.stopPropagation()}>
                            <div className="space-y-4">
                                <p className="text-xs text-gray-500">חישוב לפרופיל סגור (ברזל)</p>
                                <div className="flex gap-2">
                                    <input type="number" value={rhsWidth} onChange={e => setRhsWidth(e.target.value)} placeholder="רוחב (מ''מ)" className="w-1/2 bg-black border border-[#444] text-white p-3 rounded-lg" />
                                    <input type="number" value={rhsHeight} onChange={e => setRhsHeight(e.target.value)} placeholder="גובה (מ''מ)" className="w-1/2 bg-black border border-[#444] text-white p-3 rounded-lg" />
                                </div>
                                <input type="number" value={rhsThickness} onChange={e => setRhsThickness(e.target.value)} placeholder="עובי דופן (מ''מ)" className="w-full bg-black border border-[#444] text-white p-3 rounded-lg" />
                                <input type="number" value={rhsLength} onChange={e => setRhsLength(e.target.value)} placeholder="אורך כולל (מטרים)" className="w-full bg-black border border-[#444] text-white p-3 rounded-lg" />

                                <button onClick={handleRhsCalc} className="w-full bg-gray-700 text-white font-bold p-4 rounded-lg hover:bg-gray-600">
                                    חשב משקל
                                </button>

                                {rhsResult && (
                                    <div className="mt-4 p-4 bg-black border border-gray-600 text-white rounded-lg text-center font-bold">
                                        {rhsResult}
                                    </div>
                                )}
                            </div>
                        </div>
                    </details>

                    {/* 4. Unit Converter */}
                    <details className="bg-[#252525] p-3 rounded-lg border border-transparent open:border-[#444] group cursor-pointer">
                        <summary className="font-bold text-white flex justify-between list-none items-center">
                            ממיר צול ל-מ&quot;מ
                            <span className="text-[#ff6d00] text-xl group-open:hidden">+</span>
                            <span className="text-[#ff6d00] text-xl hidden group-open:block">-</span>
                        </summary>
                        <div className="mt-4 border-t border-[#333] pt-4 cursor-default" onClick={(e) => e.stopPropagation()}>
                            <div className="space-y-4">
                                <label className="block text-gray-400 text-sm mb-1">הכנס ערך באינצ'ים ("1, "1.5 וכו'):</label>
                                <input type="number" value={inchVal} onChange={e => setInchVal(e.target.value)} placeholder='למשל: 2.5' className="w-full bg-black border border-[#444] text-white p-3 rounded-lg" />

                                <button onClick={handleConvert} className="w-full bg-gray-700 text-white font-bold p-4 rounded-lg hover:bg-gray-600">
                                    המר
                                </button>

                                <div className="mt-4 border-t border-[#333] pt-4">
                                    <label className="text-xs text-gray-500 block mb-2">טבלה מהירה (צול לצנרת):</label>
                                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 text-center">
                                        <div className="bg-[#111] p-1 border border-[#333] rounded">1/2" = 21.3 מ"מ</div>
                                        <div className="bg-[#111] p-1 border border-[#333] rounded">3/4" = 26.9 מ"מ</div>
                                        <div className="bg-[#111] p-1 border border-[#333] rounded">1" = 33.7 מ"מ</div>
                                        <div className="bg-[#111] p-1 border border-[#333] rounded">1.5" = 48.3 מ"מ</div>
                                        <div className="bg-[#111] p-1 border border-[#333] rounded">2" = 60.3 מ"מ</div>
                                    </div>
                                </div>

                                {convertResult && (
                                    <div className="mt-4 p-4 bg-black border border-gray-600 text-white rounded-lg text-center font-bold">
                                        {convertResult}
                                    </div>
                                )}
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    );
}
