import Link from "next/link"
import type { ReactNode } from "react"

type P = { s: readonly ReactNode[] }

export function NavLink({ s }: P) {
  return (
    <Link
      href={s[0] as string}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 12px",
        fontSize: "14px",
        color: "#14171c",
        textDecoration: "none",
      }}
    >
      {s[1]}
    </Link>
  )
}

export function NavMenuItem({ s }: P) {
  return (
    <Link href={s[0] as string} style={{ display: "block", padding: "10px 12px", borderRadius: "8px", textDecoration: "none" }}>
      <div style={{ fontSize: "14px", fontWeight: "500", color: "#14171c" }}>{s[1]}</div>
      <div style={{ fontSize: "12.5px", color: "#7b828c", marginTop: "2px" }}>{s[2]}</div>
    </Link>
  )
}

export function SocialLink({ s }: P) {
  return (
    <Link
      href={s[0] as string}
      aria-label="red social"
      style={{
        width: "34px",
        height: "34px",
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,.28)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {s[1]}
    </Link>
  )
}

export function FooterLink({ s }: P) {
  return (
    <Link
      href={s[0] as string}
      style={{ display: "block", padding: "5px 0", fontSize: "14.5px", color: "rgba(255,255,255,.82)", textDecoration: "none" }}
    >
      {s[1]}
    </Link>
  )
}

export function FaqItem({ s }: P) {
  return (
    <details style={{ borderTop: "1px solid #e0e2e6", padding: "22px 0" }}>
      <summary
        style={{
          cursor: "pointer",
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          fontSize: "17px",
          fontWeight: "500",
          color: "#1b1d21",
        }}
      >
        {s[0]}
        {s[1]}
      </summary>
      <p style={{ margin: "14px 0 0", maxWidth: "620px", fontSize: "15.5px", lineHeight: "1.6", color: "#6b7280", textWrap: "pretty" }}>
        {s[2]}
      </p>
    </details>
  )
}

export function ServiceShortcut({ s }: P) {
  return (
    <Link
      href={s[0] as string}
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "10px",
        textDecoration: "none",
        padding: "14px 0",
        borderTop: "1px solid #e0e2e6",
      }}
    >
      <span style={{ fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace", fontSize: "10.5px", color: "#2f5bea" }}>
        {s[1]}
      </span>
      <span style={{ fontSize: "15px", color: "#1b1d21" }}>{s[2]}</span>
    </Link>
  )
}

export function ClientLogo({ s }: P) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", flex: "none" }}>
      {s[0]}
      <span style={{ fontSize: "25px", fontWeight: "600", letterSpacing: "-0.02em", color: "#1b1d21" }}>{s[1]}</span>
    </div>
  )
}

export function ServiceRow({ s }: P) {
  return (
    <Link
      href={s[0] as string}
      style={{
        display: "grid",
        gridTemplateColumns: "56px 1.1fr 1.2fr 1fr 24px",
        gap: "24px",
        alignItems: "center",
        padding: "30px 0",
        borderTop: "1px solid #e0e2e6",
        textDecoration: "none",
      }}
    >
      <span style={{ fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace", fontSize: "11px", color: "#2f5bea" }}>
        {s[1]}
      </span>
      <span
        style={{
          fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
          fontWeight: "400",
          letterSpacing: "-0.015em",
          color: "#1b1d21",
          fontSize: "38px",
          lineHeight: "1.05",
        }}
      >
        {s[2]}
      </span>
      <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#6b7280" }}>{s[3]}</span>
      <span
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "10.5px",
          letterSpacing: ".06em",
          textTransform: "uppercase",
          color: "#9aa1ab",
        }}
      >
        {s[4]}
      </span>
      {s[5]}
    </Link>
  )
}

export function FactRow({ s }: P) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: "20px", padding: "16px 0", borderTop: "1px solid #e6e8eb" }}>
      <span
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "10.5px",
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "#9aa1ab",
          paddingTop: "3px",
        }}
      >
        {s[0]}
      </span>
      <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#1b1d21" }}>{s[1]}</span>
    </div>
  )
}

export function MetricStat({ s }: P) {
  return (
    <div style={{ padding: "8px 32px 8px 0" }}>
      <div
        style={{
          fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
          fontWeight: "400",
          letterSpacing: "-0.015em",
          color: "#2f5bea",
          fontSize: "64px",
          lineHeight: "1",
        }}
      >
        {s[0]}
      </div>
      <div style={{ marginTop: "10px", fontSize: "15px", color: "#6b7280" }}>{s[1]}</div>
    </div>
  )
}

export function StepCard({ s }: P) {
  return (
    <div style={{ paddingTop: "24px" }}>
      <div style={{ fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace", fontSize: "10.5px", color: "#2f5bea" }}>
        {s[0]}
      </div>
      <div
        style={{
          marginTop: "36px",
          fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
          fontWeight: "400",
          letterSpacing: "-0.015em",
          color: "#1b1d21",
          fontSize: "30px",
          lineHeight: "1.1",
        }}
      >
        {s[1]}
      </div>
      <p style={{ margin: "12px 0 0", fontSize: "14.5px", lineHeight: "1.55", color: "#7b828c", textWrap: "pretty" }}>{s[2]}</p>
    </div>
  )
}

export function QuoteStep({ s }: P) {
  return (
    <div>
      <div style={{ fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace", fontSize: "10.5px", color: "#2f5bea" }}>
        {s[0]}
      </div>
      <div style={{ marginTop: "6px", fontSize: "15px", lineHeight: "1.45", color: "#1b1d21" }}>{s[1]}</div>
    </div>
  )
}

export function FeaturedStory({ s }: P) {
  return (
    <div
      style={{
        boxSizing: "border-box",
        background: "#fff",
        border: "1px solid #e6e8eb",
        borderRadius: "20px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "28px",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", flex: "none" }}>
            {s[0]}
            <span style={{ fontSize: "25px", fontWeight: "600", letterSpacing: "-0.02em", color: "#1b1d21" }}>{s[1]}</span>
          </div>
        </div>
        <div style={{ marginTop: "26px", display: "flex", alignItems: "baseline", gap: "12px" }}>
          <span
            style={{
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontSize: "52px",
              lineHeight: "1",
              color: "#2f5bea",
            }}
          >
            {s[2]}
          </span>
          <span style={{ fontSize: "14px", color: "#6b7280" }}>{s[3]}</span>
        </div>
        <p style={{ margin: "18px 0 0", fontSize: "16px", lineHeight: "1.55", color: "#3a4049", textWrap: "pretty" }}>{s[4]}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "#dbe4fd",
              color: "#1e3a8a",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
              fontWeight: "600",
              flex: "none",
            }}
          >
            {s[5]}
          </span>
          <div>
            <div style={{ fontSize: "14px", fontWeight: "500", color: "#1b1d21" }}>{s[6]}</div>
            <div style={{ fontSize: "13px", color: "#7b828c" }}>{s[7]}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ArticleCard({ s }: P) {
  return (
    <Link
      href={s[0] as string}
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        background: "#fff",
        border: "1px solid #e6e8eb",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", height: "200px", overflow: "hidden", background: "#f3f5fd" }}>
        <img src={s[1] as string} alt="" style={{ width: "100%", height: "200px", display: "block" }} aria-hidden="true" />
      </div>
      <div style={{ padding: "24px 24px 26px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}>
        <span
          style={{
            fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
            fontSize: "10.5px",
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: "#2f5bea",
          }}
        >
          {s[2]}
        </span>
        <div style={{ fontSize: "19px", lineHeight: "1.3", fontWeight: "500", color: "#1b1d21", textWrap: "balance" }}>{s[3]}</div>
        <p style={{ margin: "0", fontSize: "14.5px", lineHeight: "1.55", color: "#7b828c" }}>{s[4]}</p>
        <div style={{ marginTop: "auto", paddingTop: "8px", fontSize: "13px", color: "#9aa1ab" }}>{s[5]}</div>
      </div>
    </Link>
  )
}

export function FieldLabel({ s }: P) {
  return (
    <span
      style={{
        fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
        fontSize: "10.5px",
        letterSpacing: ".08em",
        color: "#9aa1ab",
      }}
    >
      {s[0]}
    </span>
  )
}

export function AppSidebarItem({ s }: P) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "9px",
        padding: "8px 10px",
        borderRadius: "8px",
        fontSize: "13px",
        color: "#6b7280",
        background: "transparent",
      }}
    >
      <span style={{ width: "6px", height: "6px", borderRadius: "2px", background: "#c9ced4" }}></span>
      {s[0]}
    </div>
  )
}

export function AppStatCard({ s }: P) {
  return (
    <div style={{ flex: "1", border: "1px solid #e6e8eb", borderRadius: "10px", padding: "12px 14px", background: "#fff" }}>
      <div style={{ fontSize: "11.5px", color: "#9aa1ab" }}>{s[0]}</div>
      <div style={{ marginTop: "4px", fontSize: "22px", letterSpacing: "-0.02em", color: "#14171c" }}>{s[1]}</div>
    </div>
  )
}

export function DailyAction({ s }: P) {
  return (
    <div style={{ boxSizing: "border-box", background: "#fff", border: "1px solid #e6e8eb", borderRadius: "20px", padding: "28px" }}>
      <span
        style={{
          width: "40px",
          height: "40px",
          flex: "none",
          borderRadius: "10px",
          background: "#eaf1fe",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {s[0]}
      </span>
      <div style={{ marginTop: "52px", fontSize: "18px", fontWeight: "500", color: "#1b1d21" }}>{s[1]}</div>
      <p style={{ margin: "8px 0 0", fontSize: "14.5px", lineHeight: "1.55", color: "#7b828c" }}>{s[2]}</p>
    </div>
  )
}

export function Chip({ s }: P) {
  return (
    <span
      style={{
        display: "inline-flex",
        padding: "8px 14px",
        border: "1px solid",
        borderRadius: "999px",
        fontSize: "13.5px",
        background: "#fff",
        color: "#3a4049",
        borderColor: "#e1e3e6",
      }}
    >
      {s[0]}
    </span>
  )
}

export function FlowCard({ s }: P) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        background: "#fff",
        borderRadius: "14px",
        padding: "16px 18px",
        boxShadow: "0 1px 2px rgba(0,0,0,.05)",
      }}
    >
      <div style={{ fontSize: "15px", fontWeight: "500", color: "#1b1d21" }}>{s[0]}</div>
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "flex-end" }}>
        <FlowStep s={[s[1]]} />
        <FlowStep s={[s[2]]} />
        <FlowStep s={[s[3]]} />
      </div>
    </div>
  )
}

export function FlowStep({ s }: P) {
  return (
    <span style={{ fontSize: "12px", padding: "4px 10px", borderRadius: "999px", background: "#eaf1fe", color: "#1d4ed8" }}>{s[0]}</span>
  )
}

export function RoleCard({ s }: P) {
  return (
    <div style={{ boxSizing: "border-box", background: "#fff", border: "1px solid #e6e8eb", borderRadius: "20px", padding: "28px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#dbe4fd",
            color: "#1e3a8a",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          {s[0]}
        </span>
        <div>
          <div style={{ fontSize: "16px", fontWeight: "500", color: "#1b1d21" }}>{s[1]}</div>
          <div style={{ fontSize: "13.5px", color: "#7b828c" }}>{s[2]}</div>
        </div>
      </div>
      <div style={{ marginTop: "22px" }}>
        <RoleItem s={[s[3], s[4]]} />
        <RoleItem s={[s[5], s[6]]} />
        <RoleItem s={[s[7], s[8]]} />
      </div>
    </div>
  )
}

export function RoleItem({ s }: P) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "12px 0",
        borderTop: "1px solid #e6e8eb",
        fontSize: "15.5px",
        color: "#1b1d21",
      }}
    >
      <span style={{ marginTop: "3px" }}>{s[0]}</span>
      {s[1]}
    </div>
  )
}

export function DayStep({ s }: P) {
  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,.18)", paddingTop: "22px" }}>
      <div style={{ fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace", fontSize: "12px", color: "#8fa8f8" }}>
        {s[0]}
      </div>
      <div style={{ marginTop: "14px", fontSize: "19px", fontWeight: "500", color: "#fff" }}>{s[1]}</div>
      <p style={{ margin: "10px 0 0", fontSize: "14.5px", lineHeight: "1.6", color: "#a8afba" }}>{s[2]}</p>
    </div>
  )
}

export function DashboardStat({ s }: P) {
  return (
    <div
      style={{
        boxSizing: "border-box",
        background: "#fff",
        border: "1px solid #e6e8eb",
        borderRadius: "20px",
        padding: "26px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "28px",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
            fontWeight: "400",
            letterSpacing: "-0.015em",
            color: "#2f5bea",
            fontSize: "52px",
            lineHeight: "1",
          }}
        >
          {s[0]}
        </div>
        <div style={{ marginTop: "10px", fontSize: "14.5px", lineHeight: "1.45", color: "#6b7280" }}>{s[1]}</div>
      </div>
      <div>{s[2]}</div>
    </div>
  )
}

export function CompareRow({ s }: P) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.1fr 1.4fr 1.4fr",
        gap: "24px",
        padding: "18px 28px",
        borderTop: "1px solid #e6e8eb",
        fontSize: "15px",
        alignItems: "center",
      }}
    >
      <span style={{ fontWeight: "500", color: "#1b1d21" }}>{s[0]}</span>
      <span style={{ color: "#9aa1ab" }}>{s[1]}</span>
      <span style={{ color: "#1b1d21", display: "flex", gap: "10px", alignItems: "center" }}>
        {s[2]}
        {s[3]}
      </span>
    </div>
  )
}

export function SecurityCard({ s }: P) {
  return (
    <div style={{ boxSizing: "border-box", background: "#fff", border: "1px solid #e6e8eb", borderRadius: "20px", padding: "28px" }}>
      <div style={{ fontSize: "17px", fontWeight: "500", color: "#1b1d21", marginBottom: "14px" }}>{s[0]}</div>
      <RoleItem s={[s[1], s[2]]} />
      <RoleItem s={[s[3], s[4]]} />
      <RoleItem s={[s[5], s[6]]} />
    </div>
  )
}

export function ProcessStep({ s }: P) {
  return (
    <div
      style={{
        boxSizing: "border-box",
        background: "#fff",
        border: "1px solid #e6e8eb",
        borderRadius: "20px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "64px",
        justifyContent: "flex-start",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {s[0]}
        <span
          style={{
            fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
            fontSize: "10.5px",
            letterSpacing: ".06em",
            color: "#b0b6bf",
          }}
        >
          {s[1]}
        </span>
      </div>
      <div>
        <div style={{ fontSize: "17px", fontWeight: "500", color: "#1b1d21" }}>{s[2]}</div>
        <p style={{ margin: "10px 0 0", fontSize: "14.5px", lineHeight: "1.55", color: "#7b828c", textWrap: "pretty" }}>{s[3]}</p>
      </div>
    </div>
  )
}

export function ServiceBlock({ s }: P) {
  return (
    <Link
      href={s[0] as string}
      style={{
        display: "grid",
        gridTemplateColumns: "44px 1fr 18px",
        gap: "16px",
        alignItems: "center",
        padding: "24px 0",
        borderTop: "1px solid #e0e2e6",
        textDecoration: "none",
      }}
    >
      <span style={{ fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace", fontSize: "11px", color: "#2f5bea" }}>
        {s[1]}
      </span>
      <span>
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
            fontWeight: "400",
            letterSpacing: "-0.015em",
            color: "#1b1d21",
            fontSize: "34px",
            lineHeight: "1.1",
          }}
        >
          {s[2]}
        </span>
        <span style={{ display: "block", marginTop: "6px", fontSize: "14.5px", color: "#7b828c" }}>{s[3]}</span>
      </span>
      {s[4]}
    </Link>
  )
}

export function OrderRow({ s }: P) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "52px 1.5fr 1fr 64px",
        gap: "14px",
        alignItems: "center",
        padding: "14px 20px",
        borderTop: "1px solid #f0f1f3",
        fontSize: "14px",
        color: "#1b1d21",
      }}
    >
      <span style={{ fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace", fontSize: "12px", color: "#9aa1ab" }}>
        {s[0]}
      </span>
      <span>{s[1]}</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#3a4049" }}>
        <span
          style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2f5bea", boxShadow: "inset 0 0 0 1.5px #2f5bea" }}
        ></span>
        {s[2]}
      </span>
      <span style={{ color: "#7b828c" }}>{s[3]}</span>
    </div>
  )
}

export function OrderRowDone({ s }: P) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "52px 1.5fr 1fr 64px",
        gap: "14px",
        alignItems: "center",
        padding: "14px 20px",
        borderTop: "1px solid #f0f1f3",
        fontSize: "14px",
        color: "#1b1d21",
      }}
    >
      <span style={{ fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace", fontSize: "12px", color: "#9aa1ab" }}>
        {s[0]}
      </span>
      <span>{s[1]}</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#3a4049" }}>
        <span
          style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#1b1d21", boxShadow: "inset 0 0 0 1.5px #1b1d21" }}
        ></span>
        {s[2]}
      </span>
      <span style={{ color: "#7b828c" }}>{s[3]}</span>
    </div>
  )
}

export function DeliveryRow({ s }: P) {
  return (
    <div style={{ padding: "12px 0", borderTop: "1px solid #eceef1" }}>
      <div style={{ fontSize: "13px", fontWeight: "500", color: "#1b1d21" }}>{s[0]}</div>
      <div style={{ marginTop: "3px", fontSize: "11.5px", color: "#9aa1ab" }}>{s[1]}</div>
    </div>
  )
}

export function AssistantPrompt({ s }: P) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div
        style={{
          maxWidth: "78%",
          padding: "12px 16px",
          borderRadius: "16px 16px 4px 16px",
          background: "#1b1d21",
          color: "#fff",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        {s[0]}
      </div>
    </div>
  )
}

export function OrderChip({ s }: P) {
  return (
    <span
      style={{
        fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
        fontSize: "10px",
        color: "#2f5bea",
        border: "1px solid #c7d4fb",
        borderRadius: "6px",
        padding: "3px 8px",
        background: "#f3f6fe",
      }}
    >
      {s[0]}
    </span>
  )
}

export function CapabilityList({ s }: P) {
  return (
    <div style={{ flex: "1 1 260px" }}>
      <div
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "10px",
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "#9aa1ab",
        }}
      >
        {s[0]}
      </div>
      <div style={{ marginTop: "12px" }}>
        <CapabilityItem s={[s[1]]} />
        <CapabilityItem s={[s[2]]} />
        <CapabilityItem s={[s[3]]} />
        <CapabilityItem s={[s[4]]} />
      </div>
    </div>
  )
}

export function CapabilityItem({ s }: P) {
  return (
    <div style={{ padding: "11px 0", borderTop: "1px solid #e0dfd9", fontSize: "14.5px", lineHeight: "1.5", color: "#1b1d21" }}>{s[0]}</div>
  )
}

export function IotFact({ s }: P) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "150px 1fr",
        gap: "20px",
        padding: "16px 0",
        borderTop: "1px solid rgba(255,255,255,.16)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "10.5px",
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "#8fa8f8",
          paddingTop: "3px",
        }}
      >
        {s[0]}
      </span>
      <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#fff" }}>{s[1]}</span>
    </div>
  )
}

export function AlertRow({ s }: P) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "54px 1fr",
        gap: "14px",
        padding: "12px 0",
        borderTop: "1px solid rgba(255,255,255,.12)",
        fontSize: "13.5px",
        color: "#a8afba",
      }}
    >
      <span style={{ fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace", fontSize: "11.5px", color: "#8fa8f8" }}>
        {s[0]}
      </span>
      <span>{s[1]}</span>
    </div>
  )
}

export function SolutionRow({ s }: P) {
  return (
    <Link
      href={s[0] as string}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px",
        padding: "22px 0",
        borderTop: "1px solid #e0e2e6",
        textDecoration: "none",
      }}
    >
      <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 24px" }}>
        <span
          style={{
            fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
            fontWeight: "400",
            letterSpacing: "-0.015em",
            color: "#1b1d21",
            fontSize: "28px",
          }}
        >
          {s[1]}
        </span>
        <span style={{ fontSize: "14.5px", color: "#7b828c" }}>{s[2]}</span>
      </span>
      {s[3]}
    </Link>
  )
}

export function ServiceFaqItem({ s }: P) {
  return (
    <details style={{ borderTop: "1px solid #e0e2e6", padding: "22px 0" }}>
      <summary
        style={{
          cursor: "pointer",
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          fontSize: "17px",
          fontWeight: "500",
          color: "#1b1d21",
        }}
      >
        {s[0]}
        {s[1]}
      </summary>
      <p style={{ margin: "14px 0 0", maxWidth: "620px", fontSize: "15.5px", lineHeight: "1.6", color: "#6b7280" }}>{s[2]}</p>
    </details>
  )
}

export function PortalStep({ s }: P) {
  return (
    <div style={{ flex: "1" }}>
      <div style={{ height: "4px", borderRadius: "2px", background: "#3b82f6" }}></div>
      <div style={{ marginTop: "8px", fontSize: "11.5px", color: "#1b1d21" }}>{s[0]}</div>
    </div>
  )
}

export function AudienceCard({ s }: P) {
  return (
    <div style={{ boxSizing: "border-box", background: "#fff", border: "1px solid #e6e8eb", borderRadius: "20px", padding: "28px" }}>
      <span
        style={{
          width: "40px",
          height: "40px",
          flex: "none",
          borderRadius: "10px",
          background: "#eaf1fe",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {s[0]}
      </span>
      <div style={{ marginTop: "48px", fontSize: "17px", fontWeight: "500", color: "#1b1d21" }}>{s[1]}</div>
      <p style={{ margin: "8px 0 0", fontSize: "14.5px", lineHeight: "1.55", color: "#7b828c" }}>{s[2]}</p>
    </div>
  )
}

export function IncludeCard({ s }: P) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", fontWeight: "500", color: "#1b1d21" }}>
        {s[0]}
        {s[1]}
      </div>
      <p style={{ margin: "10px 0 0", fontSize: "14.5px", lineHeight: "1.55", color: "#7b828c" }}>{s[2]}</p>
    </div>
  )
}

export function OtherSolutionRow({ s }: P) {
  return (
    <Link
      href={s[0] as string}
      style={{
        display: "block",
        textDecoration: "none",
        background: "#fff",
        border: "1px solid #e6e8eb",
        borderRadius: "20px",
        padding: "24px",
      }}
    >
      <div style={{ fontSize: "17px", fontWeight: "500", color: "#1b1d21" }}>{s[1]}</div>
      <div style={{ marginTop: "6px", fontSize: "14px", color: "#7b828c" }}>{s[2]}</div>
      <div style={{ marginTop: "36px" }}>{s[3]}</div>
    </Link>
  )
}

export function FitCustomItem({ s }: P) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "flex-start",
        padding: "14px 0",
        borderTop: "1px dashed rgba(255,255,255,.16)",
        fontSize: "14.5px",
        lineHeight: "1.5",
        color: "#e5e7eb",
      }}
    >
      <span style={{ marginTop: "3px" }}>{s[0]}</span>
      {s[1]}
    </div>
  )
}

export function FitPackageItem({ s }: P) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "flex-start",
        padding: "14px 0",
        borderTop: "1px dashed #d5d9de",
        fontSize: "14.5px",
        lineHeight: "1.5",
        color: "#4b5563",
      }}
    >
      <span style={{ marginTop: "3px" }}>{s[0]}</span>
      {s[1]}
    </div>
  )
}

export function ProcessCard({ s }: P) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e6e8eb", borderRadius: "10px", padding: "22px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "8px",
            background: "#eff6ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {s[0]}
        </span>
        <span style={{ fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace", fontSize: "12px", color: "#9aa1ab" }}>
          {s[1]}
        </span>
      </div>
      <div style={{ marginTop: "18px", fontSize: "16.5px", fontWeight: "500" }}>{s[2]}</div>
      <div style={{ marginTop: "8px", fontSize: "13.5px", lineHeight: "1.55", color: "#7b828c" }}>{s[3]}</div>
    </div>
  )
}

export function JourneyStep({ s }: P) {
  return (
    <div style={{ flex: "1 1 170px", position: "relative", paddingTop: "30px" }}>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          background: "#fff",
          border: "1.5px solid #2f5bea",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "6px",
          left: "22px",
          right: "8px",
          height: "1px",
          background: "repeating-linear-gradient(to right, #2f5bea 0 5px, transparent 5px 9px)",
        }}
      ></div>
      <div style={{ fontSize: "16px", fontWeight: "500", color: "#14171c" }}>{s[0]}</div>
      <p style={{ margin: "8px 0 0", paddingRight: "16px", fontSize: "13.5px", lineHeight: "1.55", color: "#7b828c" }}>{s[1]}</p>
    </div>
  )
}

export function QualityCard({ s }: P) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "16px 20px", borderTop: "1px solid #eceef1" }}>
      <span
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background: "#eff6ff",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none",
        }}
      >
        {s[0]}
      </span>
      <div>
        <div style={{ fontSize: "15px", color: "#14171c" }}>{s[1]}</div>
        <div style={{ marginTop: "2px", fontSize: "13px", color: "#7b828c" }}>{s[2]}</div>
      </div>
    </div>
  )
}

export function SecurityPoint({ s }: P) {
  return (
    <div style={{ flex: "1 1 220px" }}>
      <span
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,.18)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {s[0]}
      </span>
      <div style={{ marginTop: "16px", fontSize: "18px", color: "#fff" }}>{s[1]}</div>
      <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: "1.6", color: "#a3aab5" }}>{s[2]}</p>
    </div>
  )
}

export function DeliveryCard({ s }: P) {
  return (
    <div style={{ flex: "1 1 300px", display: "flex", gap: "16px", padding: "22px 0", borderTop: "1px dashed #c9ced4" }}>
      <span
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "9px",
          background: "#eff6ff",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "none",
        }}
      >
        {s[0]}
      </span>
      <div>
        <div style={{ fontSize: "16px", color: "#14171c" }}>{s[1]}</div>
        <p style={{ margin: "6px 0 0", fontSize: "14px", lineHeight: "1.55", color: "#7b828c" }}>{s[2]}</p>
      </div>
    </div>
  )
}

export function AfterCard({ s }: P) {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "22px 0", borderTop: "1px dashed #c9ced4" }}>
      <span
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "12px",
          color: "#9aa1ab",
          width: "24px",
          paddingTop: "3px",
        }}
      >
        {s[0]}
      </span>
      <div>
        <div style={{ fontSize: "19px", color: "#14171c" }}>{s[1]}</div>
        <p style={{ margin: "6px 0 0", fontSize: "14.5px", lineHeight: "1.6", color: "#7b828c" }}>{s[2]}</p>
      </div>
    </div>
  )
}

export function IntegrationFaqItem({ s }: P) {
  return (
    <details style={{ borderTop: "1px dashed #c9ced4", padding: "20px 0" }}>
      <summary
        style={{
          cursor: "pointer",
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          fontSize: "17px",
          fontWeight: "500",
        }}
      >
        {s[0]}
        {s[1]}
      </summary>
      <div style={{ marginTop: "10px", maxWidth: "620px", fontSize: "14.5px", lineHeight: "1.6", color: "#7b828c" }}>{s[2]}</div>
    </details>
  )
}

export function PrincipleCard({ s }: P) {
  return (
    <div style={{ boxSizing: "border-box", background: "#fff", border: "1px solid #e6e8eb", borderRadius: "20px", padding: "28px" }}>
      <div
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "10.5px",
          letterSpacing: ".06em",
          color: "#2f5bea",
        }}
      >
        {s[0]}
      </div>
      <div style={{ marginTop: "56px", fontSize: "18px", fontWeight: "500", color: "#1b1d21", lineHeight: "1.25" }}>{s[1]}</div>
      <p style={{ margin: "10px 0 0", fontSize: "14.5px", lineHeight: "1.55", color: "#7b828c" }}>{s[2]}</p>
    </div>
  )
}

export function TeamCardA({ s }: P) {
  return (
    <div>
      <div
        style={{
          aspectRatio: "1 / 1",
          borderRadius: "20px",
          background: "#dbe4fd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
          fontWeight: "400",
          letterSpacing: "-0.015em",
          color: "#1e3a8a",
          fontSize: "56px",
        }}
      >
        {s[0]}
      </div>
      <div style={{ marginTop: "14px", fontSize: "16px", fontWeight: "500", color: "#1b1d21" }}>{s[1]}</div>
      <div style={{ marginTop: "3px", fontSize: "14px", color: "#7b828c" }}>{s[2]}</div>
    </div>
  )
}

export function TeamCardB({ s }: P) {
  return (
    <div>
      <div
        style={{
          aspectRatio: "1 / 1",
          borderRadius: "20px",
          background: "#c9d4fb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
          fontWeight: "400",
          letterSpacing: "-0.015em",
          color: "#1e3a8a",
          fontSize: "56px",
        }}
      >
        {s[0]}
      </div>
      <div style={{ marginTop: "14px", fontSize: "16px", fontWeight: "500", color: "#1b1d21" }}>{s[1]}</div>
      <div style={{ marginTop: "3px", fontSize: "14px", color: "#7b828c" }}>{s[2]}</div>
    </div>
  )
}

export function TeamCardC({ s }: P) {
  return (
    <div>
      <div
        style={{
          aspectRatio: "1 / 1",
          borderRadius: "20px",
          background: "#e4ebfe",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
          fontWeight: "400",
          letterSpacing: "-0.015em",
          color: "#1e3a8a",
          fontSize: "56px",
        }}
      >
        {s[0]}
      </div>
      <div style={{ marginTop: "14px", fontSize: "16px", fontWeight: "500", color: "#1b1d21" }}>{s[1]}</div>
      <div style={{ marginTop: "3px", fontSize: "14px", color: "#7b828c" }}>{s[2]}</div>
    </div>
  )
}

export function TeamCardD({ s }: P) {
  return (
    <div>
      <div
        style={{
          aspectRatio: "1 / 1",
          borderRadius: "20px",
          background: "#bccbf7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
          fontWeight: "400",
          letterSpacing: "-0.015em",
          color: "#1e3a8a",
          fontSize: "56px",
        }}
      >
        {s[0]}
      </div>
      <div style={{ marginTop: "14px", fontSize: "16px", fontWeight: "500", color: "#1b1d21" }}>{s[1]}</div>
      <div style={{ marginTop: "3px", fontSize: "14px", color: "#7b828c" }}>{s[2]}</div>
    </div>
  )
}

export function HistoryStep({ s }: P) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#3b82f6", flex: "none" }}></span>
        <span style={{ flex: "1", borderTop: "1.5px dashed #9db8ff" }}></span>
      </div>
      <div
        style={{
          marginTop: "16px",
          fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
          fontWeight: "400",
          letterSpacing: "-0.015em",
          color: "#1b1d21",
          fontSize: "40px",
          lineHeight: "1",
        }}
      >
        {s[0]}
      </div>
      <div style={{ marginTop: "12px", fontSize: "16px", fontWeight: "500", color: "#1b1d21" }}>{s[1]}</div>
      <p style={{ margin: "8px 0 0", fontSize: "14.5px", lineHeight: "1.55", color: "#7b828c" }}>{s[2]}</p>
    </div>
  )
}

export function PricingPlan({ s }: P) {
  return (
    <div
      style={{
        boxSizing: "border-box",
        border: "1px solid #e6e8eb",
        borderRadius: "24px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        background: "#fff",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
            fontSize: "10.5px",
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: "#2f5bea",
          }}
        >
          {s[0]}
        </div>
        <div
          style={{
            marginTop: "22px",
            fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
            fontWeight: "400",
            letterSpacing: "-0.015em",
            color: "#1b1d21",
            fontSize: "48px",
            lineHeight: "1",
          }}
        >
          {s[1]}
        </div>
        <div style={{ marginTop: "8px", fontSize: "14px", color: "#7b828c" }}>{s[2]}</div>
      </div>
      <div style={{ fontSize: "14px", color: "#7b828c" }}>
        {s[3]}
        <span style={{ color: "#1b1d21" }}>{s[4]}</span>
      </div>
      <div>
        <PlanFeature s={[s[5], s[6]]} />
        <PlanFeature s={[s[7], s[8]]} />
        <PlanFeature s={[s[9], s[10]]} />
      </div>
      <div style={{ marginTop: "auto" }}>
        <Link
          href={s[11] as string}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 18px",
            borderRadius: "9px",
            fontSize: "14.5px",
            fontWeight: "500",
            textDecoration: "none",
            background: "#fff",
            color: "#1b1d21",
            border: "1px solid #e1e3e6",
          }}
        >
          {s[12]}
          {s[13]}
        </Link>
      </div>
    </div>
  )
}

export function PlanFeature({ s }: P) {
  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid #eceef1", fontSize: "14.5px", color: "#1b1d21" }}>
      <span style={{ marginTop: "2px" }}>{s[0]}</span>
      {s[1]}
    </div>
  )
}

export function PlanCheck({ s }: P) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "10px 0",
        borderTop: "1px solid rgba(255,255,255,.12)",
        fontSize: "14.5px",
        color: "#fff",
      }}
    >
      <span style={{ marginTop: "2px" }}>{s[0]}</span>
      {s[1]}
    </div>
  )
}

export function PaymentStep({ s }: P) {
  return (
    <div style={{ boxSizing: "border-box", background: "#fff", border: "1px solid #e6e8eb", borderRadius: "20px", padding: "28px" }}>
      <div
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "10.5px",
          letterSpacing: ".06em",
          color: "#2f5bea",
        }}
      >
        {s[0]}
      </div>
      <div
        style={{
          marginTop: "48px",
          fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
          fontWeight: "400",
          letterSpacing: "-0.015em",
          color: "#1b1d21",
          fontSize: "44px",
          lineHeight: "1",
        }}
      >
        {s[1]}
      </div>
      <div style={{ marginTop: "14px", fontSize: "17px", fontWeight: "500", color: "#1b1d21" }}>{s[2]}</div>
      <p style={{ margin: "8px 0 0", fontSize: "14.5px", lineHeight: "1.55", color: "#7b828c" }}>{s[3]}</p>
    </div>
  )
}

export function CaseCard({ s }: P) {
  return (
    <Link
      href={s[0] as string}
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        background: "#fff",
        border: "1px solid #e6e8eb",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", height: "180px", overflow: "hidden", background: "#f3f5fd" }}>
        <img src={s[1] as string} alt="" style={{ width: "100%", height: "180px", display: "block" }} aria-hidden="true" />
        <div style={{ position: "absolute", left: "16px", top: "16px", background: "#fff", borderRadius: "12px", padding: "10px 14px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", flex: "none" }}>
            {s[2]}
            <span style={{ fontSize: "25px", fontWeight: "600", letterSpacing: "-0.02em", color: "#1b1d21" }}>{s[3]}</span>
          </div>
        </div>
      </div>
      <div style={{ padding: "24px 24px 26px" }}>
        <div
          style={{
            fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
            fontSize: "10.5px",
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: "#2f5bea",
          }}
        >
          {s[4]}
        </div>
        <div style={{ marginTop: "16px", display: "flex", alignItems: "baseline", gap: "12px" }}>
          <span
            style={{
              fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
              fontWeight: "400",
              letterSpacing: "-0.015em",
              color: "#2f5bea",
              fontSize: "48px",
              lineHeight: "1",
            }}
          >
            {s[5]}
          </span>
          <span style={{ fontSize: "14px", color: "#6b7280" }}>{s[6]}</span>
        </div>
      </div>
    </Link>
  )
}

export function CaseFact({ s }: P) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "14px 0", borderTop: "1px solid #e6e8eb" }}>
      <span
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "10.5px",
          letterSpacing: ".08em",
          color: "#9aa1ab",
          textTransform: "uppercase",
        }}
      >
        {s[0]}
      </span>
      <span style={{ fontSize: "14.5px", color: "#1b1d21", textAlign: "right" }}>{s[1]}</span>
    </div>
  )
}

export function ChallengeItem({ s }: P) {
  return (
    <div style={{ display: "flex", gap: "12px", padding: "12px 0", borderTop: "1px solid #e6e8eb", fontSize: "16px", color: "#1b1d21" }}>
      <span style={{ marginTop: "3px" }}>{s[0]}</span>
      {s[1]}
    </div>
  )
}

export function BuiltCard({ s }: P) {
  return (
    <div style={{ boxSizing: "border-box", background: "#fff", border: "1px solid #e6e8eb", borderRadius: "20px", padding: "28px" }}>
      <span
        style={{
          width: "40px",
          height: "40px",
          flex: "none",
          borderRadius: "10px",
          background: "#eaf1fe",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {s[0]}
      </span>
      <div style={{ marginTop: "52px", fontSize: "17px", fontWeight: "500", color: "#1b1d21" }}>{s[1]}</div>
      <p style={{ margin: "8px 0 0", fontSize: "14.5px", lineHeight: "1.55", color: "#7b828c" }}>{s[2]}</p>
    </div>
  )
}

export function RelatedArticleCard({ s }: P) {
  return (
    <Link
      href={s[0] as string}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        textDecoration: "none",
        background: "#fff",
        border: "1px solid #e6e8eb",
        borderRadius: "20px",
        overflow: "hidden",
        color: "inherit",
      }}
    >
      <div style={{ position: "relative", height: "170px", overflow: "hidden", background: "#f3f5fd" }}>
        <img src={s[1] as string} alt="" style={{ width: "100%", height: "170px", display: "block" }} aria-hidden="true" />
      </div>
      <div style={{ padding: "4px 24px 26px" }}>
        <div
          style={{
            fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
            fontSize: "10.5px",
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: "#2f5bea",
          }}
        >
          {s[2]}
        </div>
        <div style={{ marginTop: "10px", fontSize: "18px", fontWeight: "500", color: "#1b1d21", lineHeight: "1.3" }}>{s[3]}</div>
      </div>
    </Link>
  )
}

export function PageNumber({ s }: P) {
  return (
    <span
      style={{
        width: "38px",
        height: "38px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "9px",
        fontSize: "14px",
        border: "1px solid #e1e3e6",
        background: "#fff",
        color: "#3a4049",
      }}
    >
      {s[0]}
    </span>
  )
}

export function TocLink({ s }: P) {
  return (
    <Link
      href={s[0] as string}
      style={{
        display: "block",
        padding: "8px 0 8px 14px",
        borderLeft: "2px solid #e6e8eb",
        fontSize: "14px",
        color: "#7b828c",
        textDecoration: "none",
      }}
    >
      {s[1]}
    </Link>
  )
}

export function ArticleParagraph({ s }: P) {
  return <p style={{ margin: "0 0 22px", fontSize: "18px", lineHeight: "1.7", color: "#3a4049", textWrap: "pretty" }}>{s[0]}</p>
}

export function ArticleBullet({ s }: P) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "12px 0",
        borderTop: "1px solid #e6e8eb",
        fontSize: "16px",
        color: "#1b1d21",
      }}
    >
      <span style={{ marginTop: "3px" }}>{s[0]}</span>
      {s[1]}
    </div>
  )
}

export function ContactStep({ s }: P) {
  return (
    <div style={{ display: "flex", gap: "16px", padding: "18px 0", borderTop: "1px dashed #c9ced4" }}>
      <span
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "12px",
          color: "#2f5bea",
          paddingTop: "2px",
        }}
      >
        {s[0]}
      </span>
      <div>
        <div style={{ fontSize: "16px", fontWeight: "500", color: "#1b1d21" }}>{s[1]}</div>
        <div style={{ marginTop: "4px", fontSize: "14.5px", color: "#7b828c" }}>{s[2]}</div>
      </div>
    </div>
  )
}

export function CallDay({ s }: P) {
  return (
    <div style={{ display: "grid", gap: "8px" }}>
      <div style={{ textAlign: "center", marginBottom: "4px" }}>
        <div
          style={{
            fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
            fontSize: "10.5px",
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: "#9aa1ab",
          }}
        >
          {s[0]}
        </div>
        <div style={{ fontSize: "18px", color: "#1b1d21", marginTop: "4px" }}>{s[1]}</div>
      </div>
      <TimeSlot s={[s[2]]} />
      <TimeSlot s={[s[3]]} />
      <TimeSlot s={[s[4]]} />
      <TimeSlot s={[s[5]]} />
    </div>
  )
}

export function TimeSlot({ s }: P) {
  return (
    <span
      style={{
        display: "block",
        textAlign: "center",
        padding: "9px 0",
        borderRadius: "8px",
        fontSize: "13.5px",
        border: "1px solid #e1e3e6",
        background: "#fff",
        color: "#3a4049",
      }}
    >
      {s[0]}
    </span>
  )
}

export function ThanksStep({ s }: P) {
  return (
    <div style={{ boxSizing: "border-box", background: "#fff", border: "1px solid #e6e8eb", borderRadius: "20px", padding: "28px" }}>
      <div
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "10.5px",
          letterSpacing: ".06em",
          color: "#2f5bea",
        }}
      >
        {s[0]}
      </div>
      <div style={{ marginTop: "44px", fontSize: "18px", fontWeight: "500", color: "#1b1d21" }}>{s[1]}</div>
      <p style={{ margin: "8px 0 0", fontSize: "14.5px", lineHeight: "1.55", color: "#7b828c" }}>{s[2]}</p>
    </div>
  )
}

export function LegalLink({ s }: P) {
  return (
    <Link
      href={s[0] as string}
      style={{
        display: "block",
        padding: "9px 0 9px 14px",
        borderLeft: "2px solid #e6e8eb",
        fontSize: "14.5px",
        color: "#7b828c",
        textDecoration: "none",
      }}
    >
      {s[1]}
    </Link>
  )
}

export function LegalHeading({ s }: P) {
  return (
    <h2
      id={typeof s[1] === "string" ? s[1] : undefined}
      style={{
        margin: "0 0 14px",
        fontFamily: "var(--font-instrument), 'Instrument Serif', Georgia, serif",
        fontWeight: "400",
        letterSpacing: "-0.015em",
        color: "#1b1d21",
        fontSize: "32px",
        lineHeight: "1.1",
      }}
    >
      {s[0]}
    </h2>
  )
}

export function LegalParagraph({ s }: P) {
  return <p style={{ margin: "0 0 40px", fontSize: "17px", lineHeight: "1.7", color: "#3a4049" }}>{s[0]}</p>
}

export function LayerCard({ s }: P) {
  return (
    <div>
      <span style={{ fontFamily: "Geist Mono, monospace", fontSize: "11.5px", color: "#8b929c" }}>{s[0]}</span>{" "}
      <b style={{ fontWeight: "600" }}>{s[1]}</b> <span style={{ color: "#7b828c" }}>{s[2]}</span>
    </div>
  )
}

export function LayerBenefit({ s }: P) {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "22px 0", borderTop: "1px dashed #c9ced4" }}>
      <div
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "15px",
          color: "#6b7280",
          width: "28px",
          flex: "none",
          paddingTop: "2px",
        }}
      >
        {s[0]}
      </div>
      <div style={{ flex: "1", minWidth: "0" }}>
        <div style={{ fontSize: "17px", fontWeight: "500", color: "#14171c" }}>{s[1]}</div>
        <div style={{ marginTop: "6px", fontSize: "14px", lineHeight: "1.6", color: "#7b828c", maxWidth: "440px", textWrap: "pretty" }}>
          {s[2]}
        </div>
      </div>
      <div
        style={{
          width: "30px",
          height: "30px",
          flex: "none",
          border: "1px solid #d5d9de",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
        }}
      >
        {s[3]}
      </div>
    </div>
  )
}

export function BuildCard({ s }: P) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "28px 1fr 1.2fr 110px",
        alignItems: "baseline",
        gap: "8px 32px",
        padding: "24px 0",
        borderTop: "1px dashed #c9ced4",
      }}
    >
      <span style={{ fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace", fontSize: "12px", color: "#9aa1ab" }}>
        {s[0]}
      </span>
      <div style={{ fontSize: "22px", lineHeight: "1.2", letterSpacing: "-0.015em", color: "#14171c" }}>{s[1]}</div>
      <p style={{ margin: "0", fontSize: "14.5px", lineHeight: "1.6", color: "#7b828c", textWrap: "pretty" }}>{s[2]}</p>
      <span
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "11.5px",
          color: "#4b5563",
          padding: "4px 10px",
          border: "1px solid #dfe2e6",
          borderRadius: "999px",
          background: "#fff",
          display: "inline-flex",
          alignItems: "center",
          gap: "7px",
          justifySelf: "end",
        }}
      >
        <span style={{ width: "5px", height: "5px", borderRadius: "1px", background: "#2f5bea" }}></span>
        {s[3]}
      </span>
    </div>
  )
}

export function BeforeAfter({ s }: P) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e6e8eb",
        borderRadius: "14px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "11px",
          letterSpacing: ".06em",
          color: "#9aa1ab",
        }}
      >
        {s[0]}
      </div>
      <div style={{ fontSize: "17px", lineHeight: "1.3", color: "#14171c" }}>{s[1]}</div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span
          style={{ flex: "1", height: "1px", background: "repeating-linear-gradient(to right, #2f5bea 0 5px, transparent 5px 9px)" }}
        ></span>
        {s[2]}
      </div>
      <div
        style={{
          fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
          fontSize: "11px",
          letterSpacing: ".06em",
          color: "#2f5bea",
        }}
      >
        {s[3]}
      </div>
      <p style={{ margin: "0", fontSize: "14.5px", lineHeight: "1.6", color: "#7b828c" }}>{s[4]}</p>
    </div>
  )
}

export function NotFoundLink({ s }: P) {
  return (
    <Link
      href={s[0] as string}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 0",
        borderTop: "1px solid #e6e8eb",
        fontSize: "16px",
        color: "#1b1d21",
        textDecoration: "none",
      }}
    >
      {s[1]}
      {s[2]}
    </Link>
  )
}
