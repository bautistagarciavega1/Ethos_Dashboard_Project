import ProjectProgress from "./components/ProjectProgress";
import BudgetChart from "./components/BudgetChart";
import RiskIssuesChart from "./components/RiskIssuesChart";
import Timeline from "./components/Timeline";
import Notes from "./components/Notes";

export default function Home() {
  return (
    <main className="main">
      <h1>Equipamiento Tecnológico Dashboard</h1>

      {/* Top section: Progress + Budget + Risks */}
      <section className="grid-3">
        <div className="card">
          <ProjectProgress />
        </div>
        <div className="card">
          <BudgetChart />
        </div>
        <div className="card">
          <RiskIssuesChart />
        </div>
      </section>

      {/* Bottom section: Timeline + Notes */}
      <section className="grid-2">
        <div className="card">
          <Timeline />
        </div>
        <div className="card">
          <Notes />
        </div>
      </section>
    </main>
  );
}
