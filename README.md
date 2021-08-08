# gameCatchInsect
GAME CATCH INSECTS

https://luiscorralesm.github.io/gameCatchInsect/

PASO A PASO:

Líneas 2-10: guardamos en constantes los elementos html con los que vamos a interactuar dinámicamente con JS: para esto usamos selectores como d.querySelectorAll() y d.getElementById()

Líneas 12-14: guardamos en variables de tipo let un contador para segundos, otro para el puntaje y un obj que guardará más adelante el atributo "src" y "alt" de la imagen de x insecto

Línea 17: asignamos un manejador de eventos al botón de "play game" guardado en "start_btn"
el cuál ejecuta una arrow function para agregar la clase "up" al primer elemento del nodeList que contiene la constante "screends"
![image](https://user-images.githubusercontent.com/77843336/128617723-9a598992-ceb9-4005-ba23-a5e60f1adfd9.png)


Recorremos el nodeList de "choose_insect_btns" y en cada instancia escuchamos el evento "click"

a la instancia que active el evento "click" le capturamos el elemento "img" y guardamos sus atributos "src" y "alt"

Agregamos la clase "up" al segundo elemento del nodeList que contiene la constante "screends"

Gracias a un temporizador, después de 1 seg inicializamos la función "createInsect()"
y despúes inicializamos la función "startGame()"

fuera del forEach está la función "startGame()" la cual se usa para inicializar la función "increaseTime()" dado un intervalo de tiempo de 1 seg

"increaseTime()" no es más que un función para incrementar el tiempo y mostrarlo por pantalla.

![image](https://user-images.githubusercontent.com/77843336/128617946-5c58b7f7-3bb4-4bd6-b277-74c87f293a8b.png)

La funcion "createInsect()" como su nombre lo dice, crea un nuevo insecto el cual está compuesto por un "div" contenedor con la clase "insect"  y una "img" con el "src" y "alt" guardados anteriormente

dentro de la misma función "createInsect()" se captura el evento "click" sobre el "div" con la clase "insect"  recien creado, y como acción al evento, se inicializa la función "catchInsect()"

Importante no olvidarnos de imprimir el "div" en el DOM, para esto lo pasamós como hijo del div con la clase "game_container"; la posición en la que se imprime es aleatoria gracias a la función "gatRandomLocation()" ya que esta usa el metodo Math.random() para establecer la posicion top y left

![image](https://user-images.githubusercontent.com/77843336/128618233-96d0b7da-d92c-4dfa-b571-f6e463fade97.png)

"catchInsect()" como fu nombre lo dice, es la que simula el efecto de capturar el insecto, esta función a su vez incremente el puntaje con la función "increaseScore()", agrega la clase "caught" al div "insect" y pasados 2 segundos, remueve el nodo.
al final, inicializa la función "addInsects()"

"addInsects()" a través de temporizadores, incializa la función "createInsect()" pasados unos segundos, imprimiendo por pantalla nuevos insectos 

"increaseScore()" incrementa el puntaje cada que se captura un insecto y cuando este puntaje es mayor a 19 se hace visible el mensaje guardado en el elemento con el id "message"

![image](https://user-images.githubusercontent.com/77843336/128618388-87376670-990f-49c6-abbf-cca88de089a8.png)

![image](https://user-images.githubusercontent.com/77843336/128618542-59e307e8-e5e6-4560-b2b4-4f37ca53da87.png)



