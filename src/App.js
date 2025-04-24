// Archivo: App.js
import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="main-container">
      <nav className="navbar">
        <img src="/escudo_villa_viento.png" alt="Bandera" className="logo" />
        <ul className="nav-links">
          <li><a href="#intro">Inicio</a></li>
          <li><a href="#modos">Modos</a></li>
          <li><a href="#estaciones">Estaciones</a></li>
          <li><a href="#tarifas">Tarifas</a></li>
          <li><a href="#infra">Infraestructura</a></li>
          <li><a href="#intermodalidad">Intermodalidad</a></li>
          <li><a href="#ciudad">Ciudad</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Bienvenidos a Villa del Viento</h1>
        <p>Donde el futuro se mueve contigo</p>
      </header>

      <section id="intro" className="intro">
        <h2>Una ciudad conectada</h2>
        <p>
          Villa del Viento es una ciudad colombiana innovadora y sostenible, organizada para brindarte un
          sistema de transporte ágil, limpio y amigable con el ambiente. Gracias a su planeación urbana, 
          los ciudadanos disfrutan de movilidad intermodal eficiente desde los barrios altos hasta el centro y las zonas planas.
        </p>
      </section>

      <section id="modos" className="transport-section">
        <h2>Modos de Transporte</h2>
        <ul>
          <li>
            <strong>🚌 Transporte Urbano:</strong> buses tradicionales y buses tipo acordeón que recorren toda la ciudad.
            <br />
            <img src="/bus_urbano.png" alt="Bus urbano" className="bus_urbano"/>
          </li>
          <li>
            <strong>🚉 Transporte Ferroviario:</strong> tren suburbano que une zonas periféricas con el centro.
            <br />
            <img src="/tren_suburbano.png" alt="Tren suburbano" className="tren_suburbano" />
          </li>
          <li>
            <strong>🚡 Teleférico:</strong> conecta barrios altos como *Mirador del Sol* y *Altos de la Esperanza* con el centro y zonas planas como *Nueva Aurora* y *San Fernando*.
            <br />
            <img src="/teleferico.png" alt="Teleférico" className="teleferico" />
          </li>
          <li>
            <strong>🚍 Transporte Interurbano:</strong> buses desde la Terminal Puerta del Sol hacia ciudades como Bogotá, Medellín, Cali, Pereira, Bucaramanga y más.
            <br />
            <img src="/terminal.png" alt="Terminal terrestre" className="terminal" />
          </li>
          <li>
            <strong>🛫 Transporte Aéreo:</strong> aeropuerto regional Cielo Azul con vuelos nacionales a Bogotá, Medellín, Cali, Cartagena, Barranquilla, y vuelos internacionales a Miami, Washington, Ciudad de Panamá, Lima, entre otros.
            <br />
            <img src="/aeropuerto.png" alt="Aeropuerto Cielo Azul" className="aeropuerto" />
          </li>
        </ul>
      </section>

      <section id="estaciones" className="estaciones">
        <h2>Estaciones y Rutas</h2>
        <p>El sistema de transporte de la ciudad está diseñado para que la identificación de rutas y estaciones sea sencilla e intuitiva.</p>

        <h3>Identificación de Rutas</h3>
        <ul>
          <li><strong>Rutas de Bus Urbano:</strong> se identifican por colores (Ej: Ruta Verde, Ruta Roja, Ruta Azul).</li>
          <li><strong>Rutas de Bus Acordeón:</strong> se identifican por números (Ej: Línea 1, Línea 2, Línea 3).</li>
          <li><strong>Rutas del Tren Suburbano:</strong> se identifican con letras y colores (Ej: Línea A - Azul, Línea B - Amarilla).</li>
          <li><strong>Rutas del Teleférico:</strong> se identifican por nombres de estaciones con íconos de montaña y cable.</li>
        </ul>

        <h3>Estaciones Diferenciadas</h3>
        <p>Cada tipo de estación posee señalización especial:</p>
        <ul>
          <li><strong>Estaciones de Bus:</strong> paraderos con techado azul y señalización horizontal amarilla.</li>
          <li><strong>Estaciones de Bus Acordeón:</strong> estaciones cerradas tipo BRT con puertas automáticas.</li>
          <li><strong>Estaciones Ferroviarias:</strong> andenes altos, señalización digital y torniquetes.</li>
          <li><strong>Estaciones de Teleférico:</strong> módulos elevados con acceso por ascensor o escaleras mecánicas.</li>
        </ul>

        <h3>Ejemplos de Estaciones Principales</h3>
        <ul>
          <li>Estación Central del Norte (Intermodal: tren, bus, teleférico)</li>
          <li>Estación La Loma (teleférico ↔ zona alta del barrio La Cumbre)</li>
          <li>Estación Parque Central (bus urbano ↔ estación BRT)</li>
          <li>Estación El Prado (tren suburbano ↔ terminal terrestre)</li>
        </ul>

        <p>Gracias a este sistema de identificación y señalización, moverse por la ciudad es fácil para residentes y turistas por igual.</p>

        <img src="/mapa_rutas.png" alt="Mapa de rutas" className="mapa_rutas" />
      </section>

      <section id="tarifas" className="tarifas">
        <h2>Tarifas y Beneficios</h2>
        <ul>
          <li>Bus urbano: $3.500 COP</li>
          <li>Bus acordeón: $4.200 COP</li>
          <li>Taxi: desde $8.000 COP</li>
          <li>Tren suburbano: $4.800 COP</li>
          <li>Teleférico: $6.000 COP (gratis con pase turístico)</li>
        </ul>
        <p>Medios de pago: Tarjeta VillaMovil, App QR, efectivo. Descuentos para estudiantes, adultos mayores y personas con movilidad reducida.</p>
      </section>

      <section id="infra" className="aeropuerto-terminal">
        <h2>Infraestructura Interurbana y Aérea</h2>
        <h3>🛫 Aeropuerto Cielo Azul</h3>
        <p>Ofrece vuelos nacionales a Bogotá, Medellín, Cali, Cartagena, Barranquilla, Pereira y vuelos internacionales a Miami, Washington, Panamá, Lima, Quito y Ciudad de México.</p>
        <img src="/aeropuerto1.png" alt="Aeropuerto" className="aeropuerto1" />

        <h3>🚍 Terminal Terrestre Puerta del Sol</h3>
        <p>Con rutas frecuentes a Bogotá, Cali, Medellín, Pereira, Bucaramanga, Cúcuta, Manizales y Armenia. Cuenta con zonas de espera, acceso a buses urbanos, y conectividad con el tren suburbano.</p>
        <img src="/terminal1.png" alt="Terminal terrestre" className="terminal1" />
      </section>

      <section id="intermodalidad" className="intermodalidad">
        <h2>Intermodalidad y Conectividad</h2>
        <p>
          El sistema de transporte de Villa del Viento está diseñado bajo el principio de intermodalidad cíclica, permitiendo cambiar fácilmente entre modos de transporte.
        </p>
        <ul>
          <li>🚡 <strong>Teleférico:</strong> conecta los barrios altos con Estación Central Aurora del bus acordeón.</li>
          <li>🚌 <strong>Bus acordeón:</strong> conecta con el tren suburbano en estaciones como Río Claro.</li>
          <li>🚉 <strong>Tren suburbano:</strong> conecta con la Terminal y el Aeropuerto.</li>
          <li>🛫 <strong>Aeropuerto:</strong> tiene acceso a buses urbanos y taxis oficiales.</li>
          <li>🚍 <strong>Terminal terrestre:</strong> está conectada al tren, teleférico y buses urbanos.</li>
        </ul>
        <p>
          Esta red permite comenzar un viaje en barrios elevados y llegar al aeropuerto u otra ciudad sin interrupciones.
        </p>
      </section>

      <section id="ciudad" className="ciudad-escudo">
        <h2>Villa del Viento</h2>
        <p>
          Una ciudad colombiana segura, moderna y planificada para el bienestar. Su bandera representa la armonía con la naturaleza,
          y su escudo simboliza la unidad, la historia y la conexión entre sus habitantes. Cuenta con sistemas tecnológicos de
          última generación, espacios verdes, rutas peatonales, ciclovías y movilidad sostenible.
        </p>
        <img src="/bandera_villa_viento.png" alt="Bandera de Villa del Viento" className="bandera_villa_viento" />
      </section>

      <footer>
        <p>© 2025 Villa del Viento - Conectando tu camino</p>
      </footer>
    </div>
  );
};

export default App;



