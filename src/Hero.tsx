import { MAINNET, WithWalletConnector } from '@concordium/react-components';
import './App.css';
import { Sealer } from './Sealer';
import { Verifier } from './Verifier';

export function Hero() {
  const hero_span_style = {
    border: "4px solid rgb(236, 72, 153)",
    padding: "2em",
    borderRadius: "8px",
    color: "#ffffff",
  };

  async function Confetti() {
    const confetti_style = {
      spread: 360,
      ticks: 70,
      gravity: 0,
      decay: 0.90,
      startVelocity: 25,
      colors: ["#b0f7f2", "#f4afd4", "#ffc8ae", "#b7f7bf", "#dfb4f2"],
      origin: {
        x: 0.5,
        y: 0.35,
      },
    }

    function loadConfetti() {
      return new Promise<(opts: any) => void>((resolve, reject) => {
        if ((globalThis as any).confetti) {
          return resolve((globalThis as any).confetti as any);
        }
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
        script.onload = () =>
          resolve((globalThis as any).confetti as any);
        script.onerror = reject;
        document.head.appendChild(script);
        script.remove();
      });
    }

    const confetti = await loadConfetti();

    function shoot() {
      confetti({
        ...confetti_style,
        particleCount: 80,
        scalar: 1.2,
      });

      confetti({
        ...confetti_style,
        particleCount: 60,
        scalar: 0.75,
      });
    }

      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
      setTimeout(shoot, 300);
      setTimeout(shoot, 400);
  }

  return (
    <>
      <div className="container hero" style={{paddingTop: "5vh", paddingBottom: "5vh"}}>
        <span style={hero_span_style}>
          <h1>Edubuk<br />eSeal dApp</h1>
          <p style={{fontSize: "24px", paddingTop: "3vh", textAlign: "center"}}><span className="highlight">Powered by <span style={{fontWeight: "600"}}>Concordium Blockchain</span></span></p>
          <div className="button-group" style={{justifyContent: "center", paddingTop: "3vh"}}>
            <a href="#sealer"><button className="button" style={{backgroundColor: "#ffffff", color: "rgb(3, 21, 57)", padding: "1em", border: "4px solid rgb(236, 72, 153)"}} onClick={(e: any) => Confetti()}>eSeal Your Certificates</button></a>
          </div>
          <div className="button-group" style={{justifyContent: "center", paddingTop: "3vh"}}>
            <a href="#verifier"><button className="button" style={{backgroundColor: "#ffffff", color: "rgb(3, 21, 57)", padding: "1em", border: "4px solid rgb(236, 72, 153)"}} onClick={(e: any) => Confetti()}>Verify Your Certificates</button></a>
          </div>
        </span>
      </div>
      <div className="Sealer" style={{marginTop: "25px", marginBottom: "25px", display: "block"}}>
        <WithWalletConnector network={MAINNET}>{(props) => <Sealer {...props} />}</WithWalletConnector>
      </div>
      <div className="Verifier" style={{paddingTop: "25px", marginBottom: "25px", display: "block"}}>
        <WithWalletConnector network={MAINNET}>{(props) => <Verifier {...props} />}</WithWalletConnector>
      </div>
    </>
  )
}
