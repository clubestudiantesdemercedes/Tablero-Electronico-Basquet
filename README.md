# Tablero electrónico de básquet – CAE

Aplicación web para operar el tablero y llevar el registro básico de un partido de básquetbol. Está pensada para utilizarse desde una computadora durante el encuentro, con controles directos y acceso rápido a las acciones habituales.

## Funciones principales

### Configuración del partido
- Carga de los nombres de los equipos, fecha y sede.
- Configuración de la duración de los períodos y del tiempo suplementario.
- Carga de hasta 12 jugadores por equipo, con número de camiseta, nombre y selección de titulares.
- Registro del entrenador y asistente de cada equipo.
- Guardado y recuperación de planteles en el navegador.

### Operación del partido
- Marcador independiente para local y visitante.
- Carga de puntos de jugador por acciones de 1, 2 o 3 puntos.
- Reloj de juego con inicio y pausa, finalización de período y corrección manual del tiempo restante.
- Administración de períodos regulares y suplementarios.
- Registro de faltas personales y de equipo.
- Registro de sanciones técnicas del entrenador y del banco, y descalificaciones.
- Cambios de jugadores, con registro de entradas y salidas de cancha.
- Función para deshacer la última acción registrada.

### Registro y estadísticas
- Registro cronológico de acciones con período, tiempo restante, equipo, persona y detalle cuando corresponde.
- Acumulación de puntos y faltas por jugador.
- Seguimiento de los intervalos de participación de los jugadores y cálculo de minutos/segundos jugados al finalizar el partido.
- Visualización del tiempo jugado junto a cada jugador.
- Exportación del estado y del registro del partido a un archivo JSON para conservarlo o analizarlo después.

## Registro rápido de faltas

El botón **Falta** abre una ventana compacta para elegir el código. Los botones muestran solamente el código para facilitar su uso durante el partido.

Códigos disponibles:
- **P**: falta personal sin tiros libres.
- **P1**, **P2**, **P3**: falta personal con 1, 2 o 3 tiros libres.
- **T1**, **T2**: faltas técnicas de categoría 1 o 2.
- **DI1**, **DI2**, **DI3**: faltas disruptivas de categorías 1, 2 o 3.
- **FL1**, **FL2**, **FL3**: faltas flagrantes de categorías 1, 2 o 3.
- **D**: descalificación.

Las teclas rápidas asociadas a los códigos aparecen configuradas en el código de la aplicación. La ventana también puede cerrarse con **Esc**. El sistema puede mostrar avisos por acumulación de faltas o sanciones; el operador debe verificar la situación y gestionar manualmente cualquier sustitución o procedimiento arbitral que corresponda.

## Cómo usarlo

1. Abrí la página de la aplicación en un navegador moderno.
2. En la configuración, completá los datos del encuentro, la duración de los períodos y los planteles.
3. Guardá cada plantel y confirmá la configuración para pasar a la pantalla de partido.
4. Durante el encuentro, usá los botones de cada jugador para sumar puntos, registrar faltas o realizar cambios. Controlá el reloj y los períodos desde los controles del tablero.
5. Al finalizar, verificá los tiempos jugados y usá **Exportar partido** para descargar el archivo JSON.

## Guardado y datos

- La aplicación guarda el estado del partido en el almacenamiento local del navegador (`localStorage`).
- El guardado local no equivale a una copia de seguridad en la nube y puede no estar disponible si se cambia de navegador, dispositivo o perfil, o si se borran los datos del sitio.
- Se recomienda exportar el archivo JSON al finalizar el encuentro y antes de iniciar uno nuevo.
- La función de exportación conserva datos estructurados del partido; no genera por sí sola una planilla PDF o Excel.

## Alcance y consideraciones

- Es una herramienta de operación y registro, no reemplaza el criterio de los árbitros ni la planilla oficial.
- Los avisos automáticos ayudan al operador, pero las decisiones y los procedimientos reglamentarios deben verificarse con la normativa aplicable y la mesa de control.
- El cálculo de tiempo jugado depende de que las entradas, salidas, cambios y cierres de período se registren correctamente.
- La aplicación conserva el partido en el navegador donde se está utilizando. Para respaldar o trasladar el registro, exportá el JSON.

## Tecnología

Aplicación web del repositorio **Tablero-Electronico-Basquet**. La interfaz está implementada con HTML, CSS y JavaScript del lado del navegador; no requiere una cuenta de usuario para el guardado local.

## Repositorio

https://github.com/clubestudiantesdemercedes/Tablero-Electronico-Basquet
