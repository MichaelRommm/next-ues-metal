'use client';

import { useState } from 'react';
import { calculateWeldingParams, calculatePlateWeight, calculateProfileWeight } from '@/app/actions';

export default function CalculatorView() {
    const [weldResult, setWeldResult] = useState<string>('');
    const [weightResult, setWeightResult] = useState<string>('');

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


    return (
        <div className="space-y-6 pb-24">

            {/* Welding Params Calculator */}
            <div className="bg-[#1e1e1e] border border-[#333] rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4 cursor-pointer">
                    <h3 className="text-white font-bold text-lg">MIG/Stick/TIG מחשבון</h3>
                    <span className="text-[#ff6b00]">+</span>
                </div>

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


            {/* Weight Calculator */}
            <div className="bg-[#1e1e1e] border border-[#333] rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-bold text-lg">מחשבון משקל פחים</h3>
                    <span className="text-[#ff6b00]">+</span>
                </div>

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

        </div>
    );
}
