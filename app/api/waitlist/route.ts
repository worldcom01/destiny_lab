import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "waitlist.json");

type WaitlistEntry = {
  name: string;
  email: string;
  createdAt: string;
};

async function readWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeWaitlist(entries: WaitlistEntry[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2), "utf-8");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ message: "이름을 입력해주세요." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json({ message: "올바른 이메일 주소를 입력해주세요." }, { status: 400 });
    }

    const entries = await readWaitlist();

    const duplicate = entries.find(
      (e) => e.email.toLowerCase() === email.trim().toLowerCase()
    );
    if (duplicate) {
      return NextResponse.json(
        { message: "이미 등록된 이메일입니다." },
        { status: 409 }
      );
    }

    entries.push({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      createdAt: new Date().toISOString(),
    });

    await writeWaitlist(entries);

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
