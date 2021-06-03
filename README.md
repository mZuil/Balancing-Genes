# Balancing-Genes
Software de modelización, diseñado con el objetivo de optimizar la producción de cadenas de montaje. 

---------------------------------------------------------------README------------------------------------------------------------------

Este es un documento que explica los pasos necesarios para la puesta en marcha del programa tanto de forma aislada como en la página web

-------------------------------------------------------------INSTALACION---------------------------------------------------------------

Esta acción se puede realizar desde cualquier directorio.

Para la ejecución son necesarias las librerías de numpy y de Django, para las cuales es necesario introducir desde la terminal (CMD):

Para numpy:
pip install numpy
 
Para Django:
python -m pip install Django


--------------------------------------------------------------EJECUCION-----------------------------------------------------------------

Ejecución del programa de forma aislada:

Primero es necesario modificar el archivo con los valores que se desea probar en la parte superior.
Después se debe ejecutar el programa de Python desde el compilador que se disponga.

De esta forma obtenemos información en tiempo real de los cálculos que se están realizando.

Ejecución del programa en la página web:

Son necesarios más pasos, debe accederse al directorio en el que se encuentran los archivos y directorios:

- interfazMod
- db.sqlite3
- manage.py

Una vez en este directorio debemos ejecutar desde la terminal (situada en ese directorio) el siguiente comando:

 python manage.py runserver

Debemos recibir unos mensajes de que se está iniciando el servidor.

Una vez recibidos los mensajes podemos acceder a la página mediante el siguiente enlace:

http://localhost:8000/index/

Una vez dentro se introducen y envían los datos para obtener los resultados
