import { mailOptions, transporter } from "../../../../lib/client";
import { replaceMergeTags, stripHTMLTags } from "../../../../lib/helpers";

import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export async function POST(request) {
    const data = await request.json();

    // get html template
    const htmlFilePath = path.join(process.cwd(), 'lib', 'contact-form.html');
    console.log("Iniside route",htmlFilePath)
    
    let htmlContent = fs.readFileSync(htmlFilePath, 'utf8', (err, htmlContent) => {
        if (err) {
            console.error('Error reading HTML file: ', err);
            return;
        }
    });

    // replace merge tags with values
    htmlContent = replaceMergeTags(data, htmlContent);
    const plainTextContent = stripHTMLTags(htmlContent);

    try {
        await transporter.sendMail({
           ...mailOptions,
           subject: `New Contact Form Inquiry`,
           text: plainTextContent,
           html: htmlContent,
        },[2000]);

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: err.status });
    }
}