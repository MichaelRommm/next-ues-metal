'use server';

/**
 * Calculates welding parameters based on method and material inputs.
 * This code runs ON THE SERVER, so the logic is hidden from the client browser.
 */
export async function calculateWeldingParams(
    method: string,
    thickness: number,
    material?: string,
    electrodeType?: string
) {
    if (!thickness || thickness <= 0) {
        return { error: "נא להזין עובי חומר תקין" };
    }

    let result = "";

    if (method === 'stick') {
        // Stick (SMAW) Logic
        // Base formula approx: Amps = Thickness (mm) * 30-40 (simplified for thin mats)
        // Capped for 2.5mm electrode as per user logic (60-100A)
        const amps = Math.min(100, Math.max(60, thickness * 30));

        if (electrodeType === '6013') {
            result = `אלקטרודה: 6013 (קוטר 2.5 מ"מ)\nזרם מומלץ: ${Math.floor(amps)}A\nקוטביות: DCEP או AC\nחדירה רדודה, מתאים למסגרות כללית.`;
        } else if (electrodeType === '7018') {
            const hotAmps = amps * 1.05;
            result = `אלקטרודה: 7018 (קוטר 2.5 מ"מ)\nזרם מומלץ: ${Math.floor(hotAmps)}A\nקוטביות: DCEP (+)\nשמור קשת קצרה מאוד!`;
        } else if (electrodeType === '6010') {
            result = `אלקטרודה: 6010 (קוטר 2.5 מ"מ)\nזרם מומלץ: ${Math.floor(amps)}A\nקוטביות: DCEP (+)\nנדרשת טכניקת 'הצלפה' (Whip), חדירה עמוקה.`;
        } else {
            result = "סוג אלקטרודה לא מוכר.";
        }

    } else if (method === 'mig') {
        // MIG/MAG Logic
        if (material === 'aluminum') {
            const volts = 19 + thickness;
            result = `חומר: אלומיניום\nמתח: ${Math.floor(volts)}V\nחובה ארגון נקי!\nעבוד ב-PUSH, הרץ חוט מהר יותר מפלדה.`;
        } else {
            // Assume steel
            const volts = 15 + (thickness * 1.5);
            const wireSpeed = thickness * 1.5;
            result = `חומר: ברזל\nמתח: ${Math.floor(volts)}V - ${Math.floor(volts) + 2}V\nגז: CO2 או Mix C25\nמהירות חוט: כ-${Math.floor(wireSpeed)} מטר/דקה`;
        }

    } else if (method === 'tig') {
        // TIG Logic
        const tung = thickness < 2 ? "1.6" : "2.4";
        const amps = Math.floor(thickness * 33);

        if (material === 'aluminum') {
            result = `חומר: אלומיניום\nזרם: ${Math.floor(amps * 1.1)}A (AC)\nטונגסטן: ${tung} מ"מ (ירוק/סגול/כחול)\nאיזון (Balance): 30-35% ניקוי\nתוספת חומר: 4043/5356`;
        } else if (material === 'stainless') {
            result = `חומר: נירוסטה\nזרם: ${Math.floor(amps * 0.9)}A (DC-)\nטונגסטן: ${tung} מ"מ (אדום/זהב)\nגז: ארגון נקי (+ Backing למניעת Sugaring)`;
        } else {
            result = `חומר: ברזל\nזרם: ${amps}A (DC-)\nטונגסטן: ${tung} מ"מ (אדום/כחול)\nהשחזה: חוד מחודד`;
        }
    }

    return { result };
}

/**
 * Calculates weight for metal plates.
 */
export async function calculatePlateWeight(
    density: number,
    length: number,
    width: number,
    thickness: number
) {
    if (!length || !width || !thickness) {
        return { error: "נא להזין את כל המידות" };
    }
    // density is specfic gravity (e.g. 7.85 for steel)
    // Formula: Volume (m^3) * Density (kg/m^3 * 1000) ?? 
    // User logic: L(m) * W(m) * T(mm) * Density
    // Let's replicate original logic:
    // float(macL) * float(macW) * float(macT) * float(macM)
    // Assuming density passed is like 7.85. 
    // 1m * 1m * 1mm * 7.85 = 7.85kg? Yes.

    const weight = length * width * thickness * density;
    return { weight: weight.toFixed(2) };
}

/**
 * Calculates profile weight.
 */
export async function calculateProfileWeight(
    weightPerMeter: number,
    length: number
) {
    if (!weightPerMeter || !length) return { error: "חסרים נתונים" };
    const total = weightPerMeter * length;
    return { total: total.toFixed(2) };
}
