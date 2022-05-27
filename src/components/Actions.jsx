import { toggleFullScreen } from "../lib/helpers";

export function Actions({lengthImages, settings, setSettings}){

  return (
    <header className="actions-container">
      <div className="actions-buttons">
        <div className="my-2">
          <label htmlFor="settings-timer" className="form-label">Tempo de duração</label>
          <input type="number" value={settings.timer} onChange={el => setSettings({...settings, timer: parseFloat(el.target.value)})} className="form-control" min="1000" step="1"/>
        </div>

        <div className="my-2">
          <label htmlFor="settings-bg-color" className="form-label">Cor de fundo</label>
          <input type="color" value={settings.backgroundColor} onChange={el => setSettings({...settings, backgroundColor: el.target.value})} className="form-control p-1" id="settings-bg-color"/>
        </div>

        <div className="my-2 form-group form-check">
          <label htmlFor="settings-random" className="form-check-label">Ordenação dos slides</label>
          <select className="custom-select form-select" value={settings.random} onChange={el => setSettings({...settings, random: !settings.random})}>
            <option value="false">Linear</option>
            <option value="true">Aleatório</option>
          </select>
        </div>

        <div className="my-2 form-group form-check">
          <label htmlFor="settings-random" className="form-check-label">Comportamento dos Slides</label>
          <select className="custom-select form-select" value={settings.imageBehavior} onChange={el => setSettings({...settings, imageBehavior: el.target.value})}>
            <option value="fill">Fill</option>
            <option value="contain">Contain</option>
            <option value="cover">Cover</option>
            <option value="none">None</option>
            <option value="scale-down">Scale Down</option>
            <option value="unset">Unset</option>
            <option value="revert">Revert</option>
          </select>
        </div>

        <div className="my-2">
          <label className="form-label">Habilitar/desabilitar Tela Cheia</label>
          <div>
            <button onClick={toggleFullScreen} className="btn btn-primary w-100">
              Tela cheia
            </button>
          </div>
        </div>

        <div className="my-2">
          <label className="form-label">Navegação</label>
          <div className="actions-navigation--buttons">
            <button className="btn btn-primary" onClick={() => { if(settings.counter > 0){setSettings({...settings, counter: settings.counter - 1})}}} >
              {"<"}
            </button>

            <button className="btn btn-primary mx-2" onClick={() => setSettings({...settings, play: !settings.play})} >
              {settings.play ? "Pause" : "Play"}
            </button>

            <button className="btn btn-primary" onClick={() => {if(settings.counter < lengthImages){ setSettings({...settings, counter: settings.counter + 1})}}} >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}