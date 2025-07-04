import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join("C:\\Users\\devar\\Documents\\new_project\\my-portofolio\\front-end\\views.json");
// console.log('File path:', filePath);
export async function GET() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const json = JSON.parse(data);
    console.log('Current views:', json.views);
    return NextResponse.json({ views: json.views || 0 });
  } catch (error) {
    return NextResponse.json({ views: 0 });
  }
}

export async function POST() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const json = JSON.parse(data);
    // console.log('Current views before increment:', json.views);
    json.views = (json.views || 0) + 1;
    await fs.writeFile(filePath, JSON.stringify(json, null, 2), 'utf-8');
    return NextResponse.json({ views: json.views });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update views' }, { status: 500 });
  }
}
