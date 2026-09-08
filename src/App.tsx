import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Stage1 } from "./components/Stage1";
import { Stage2 } from "./components/Stage2";
import { Charge } from "./components/Charge";
import { Disclaimer } from "./components/Disclaimer";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <main>
        <Stage1 />
        <Stage2 />
        <Charge />
        <Disclaimer />
      </main>
      <footer>
        <p>
          <strong>Feasibility only</strong> — not an electron-compositeness
          claim. Existence: YES · Stability evidence: YES (not full proof) ·
          Mechanism A: YES.
        </p>
        <p className="muted">
          Fermions on solitons · Vite + React + TypeScript + KaTeX · numbers from{" "}
          <code>src/data</code>
        </p>
      </footer>
    </div>
  );
}
