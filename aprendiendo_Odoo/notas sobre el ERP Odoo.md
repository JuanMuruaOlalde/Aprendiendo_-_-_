# notas sobre el ERP Odoo

https://www.odoo.com/es_ES

https://www.odoo.com/documentation/17.0/es/

https://github.com/odoo

[Odoo official tutorials](https://www.odoo.com/documentation/18.0/developer/tutorials.html)

[Solutions to Odoo official tutorials](https://github.com/odoo/tutorials)

[Odoo Learn](https://www.odoo.com/es_ES/slides)

[Scale-Up, el juego empresarial](https://www.odoo.com/es_ES/education/scale-up-business-game)

[OCA, Odoo Community Association](https://odoo-community.org/)

[Odoo Forum](https://www.odoo.com/forum)

[Asociación Española de Odoo](https://www.aeodoo.org/)



## Instalación

[Manual oficial de instalación](https://www.odoo.com/documentation/17.0/es/administration/on_premise/packages.html)

[Cybrosys - How to install Odoo 17](https://www.cybrosys.com/blog/how-to-install-odoo-17-on-ubuntu-20-04-lts-server)

[RoseHosting - How to install Odoo 17](https://www.rosehosting.com/blog/how-to-install-odoo-17-on-ubuntu-22-04/)

[Development Setup On Windows 11 with VS Code - Exploring Odoo](https://www.youtube.com/watch?v=wWnZu7-63jU&list=PLX6eXpRg2kb3Zqta0tZOF_p0d_DokohhP&index=1)

[Easy Development Setup on Ubuntu 22.04 with VS Code - Exploring Odoo](https://www.youtube.com/watch?v=NVMzVz8RzZY&list=PLX6eXpRg2kb3Zqta0tZOF_p0d_DokohhP&index=2)



[Odoo 18 in a container](https://www.odoo.com/documentation/18.0/administration/odoo_sh/advanced/containers.html)

[Odoo in LXD containers](https://odoo-devops.readthedocs.io/en/latest/remote-dev/lxd/lxd.html)


## Algunos comandos útiles

Arrancar el servicio con
````
  sudo systemctl start odoo17.service
````

Comprobar si está en marcha con
````
  sudo systemctl status odoo17.service
````

Acceder al sistema Odoo con
````
  http://192.168.47.87:8069/
````
(obviamente, con la IP del servidor donde tengamos corriendo Odoo)

Comprobar si ha habido algún error, revisando los log
````
  tail /var/log/odoo/odoo17.log
````
(nota: obviamente, con el archivo de log que hayamos configurado en `/etc/odoo17.conf` o con el que sea el archivo de configuración de nuestra instalación de Odoo)

Para cambiar de root al usuario odoo
````
sudo su - odoo17 -s /bin/bash
````

Para interactuar con la base de datos PostgreSQL
````
root@para-practicar-Odoo:~# su - odoo17 -s /bin/bash
odoo17@para-practicar-Odoo:~$ psql postgres
psql (16.6 (Ubuntu 16.6-0ubuntu0.24.04.1))
postgres=# \c PruebasOdoo
You are now connected to database "PruebasOdoo" as user "odoo17".
PruebasOdoo=# \d ranking_de_participantes
PruebasOdoo=#
````

Para ver los elementos que hay en las tripas Odoo, los elementos de todos los módulos instalados en el sistema. Ir al menú "Settings" "Technical".

## Conceptos básicos

[Server framework 101 Tutorial - Chapter 1: Architecture Overview](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/01_architecture.html#odoo-modules)

Cada módulo tiene su propia carpeta, dentro de `/opt/odoo17/addons`. (O de cualquier otra carpeta que se configure en la entrada `addons_path` del archivo `/etc/odoo17.conf`)


Los módulos de Odoo siguen una **arquitectura a tres niveles**:

- *Presentación*: el interfaz gráfico con el usuario, elaborado con una combinación de HTML5, CSS y JavaScript. (QWeb framework y Owl).

- *Lógica*: las operaciones de negocio, programadas en Python.

- *Datos*: la persistencia de información, almacenada en una base de datos PostgreSQL y gestionada automáticamente por el ORM de Odoo a partir de las declaraciones Python de los modelos de datos.

nota: Si no se programa expresamente la apariencia web del interfaz gráfico; es decir, si solo se declaran campos en las vistas. El interfaz se crea automáticamente con la apariencia estándar de Odoo.

nota: En algunos módulos, el interfaz no es con el usuario, sino con otros programas. En esos casos, la capa de presentación suele ser una API HTTP (una serie de "endpoints" que se pueden llamar); programada en Python en el "controler" del módulo.  
Un módulo puede llevar uno u otro (o ambos) tipos de presentacion: vistas gráficas y/o API


Los módulos de Odoo tienen **cuatro tipos principales de componentes**:

- *Objetos de negocio* (los modelos de datos y las funcionalidades), programados en Python.

- *Objetos de interfaz* (vistas, formularios, informes, configuraciones de parametrización,...), declarados en XML. Y *objetos de datos*, declarados en formato XML o CSV.

- *Partes estáticas* del interfaz: HTML, CSS, JS, iconos, imágenes,...

- *Controladores* (para poder llamar a funcionalidades del módulo mediante protocolo HTTP), programados en Python.


**Es importante indicar qué forma parte del módulo y qué no**. Todos los archivos que no se indiquen expresamente, aunque estén dentro de la carpeta del módulo, es como si no existieran.

- Los archivos de código .py, *han de indicarse dentro de `__init__.py`*, bien sea en el `__init__.py` principal o en alguno de los `__init__.py` secundarios (por ejemplo, el de la carpeta `models` o el de la carpeta `controllers`)

- Los archivos de declaraciones .xml o .csv, *han de indicarse dentro de `__manifest__.py`*


## Desarrollar un módulo

[Server framework 101 Tutorial - Chapter 2: A New Application](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/02_newapp.html)

[Building a Module](https://www.odoo.com/documentation/17.0/es/developer/tutorials/backend.html)

Antes de nada, lo primero que se ha de hacer es activar el modo desarrollador, [Developer Mode](https://www.odoo.com/documentation/17.0/es/applications/general/developer_mode.html#developer-mode)

Es importante recordar que, cuando se desee hacer efectivos cambios en un módulo:

- Es necesario reiniciar todo Odoo (parar y volver a arrancar el servicio), cuando se haya modificado código (.py) en cualquier módulo.

- Es necesario actualizar el módulo correspondiente ('Upgrade' en el menú contextual de ese módulo),  cuando se haya modificado declaraciones (.xml o .csv).

Si se han modificado ambas cosas, primero hacer efectivo los cambios en el código (es decir, reiniciar todo Odoo) y luego hacer efectivos los cambios en las declaraciones (es decir, actualizar los módulos afectados)

### Crear un nuevo módulo y activarlo

Se puede crear el esqueleto base de un nuevo módulo con el comando [Scaffolding](https://www.odoo.com/documentation/17.0/es/developer/reference/cli.html#reference-cmdline-scaffold)

Como se ha comentado anteriormente, cada módulo está contenido dentro de su propia carpeta, dentro de `/opt/odoo17/addons`; (o de cualquier otra carpeta que se añada en la entrada `addons_path` del archivo `/etc/odoo17.conf`; añadir separandolas con una coma ,).

El archivo `__manifest__.py` es quien declara la carpeta como un módulo Odoo y especifica los componentes que lo forman.

Los archivos `__init__.py` son los que declaran los paquetes Python de los que se compone el código del módulo.

Una vez en su sitio la carpeta del nuevo módulo (con por lo menos esos dos archivos). 

- Hay que reiniciar el sistema Odoo
```
  sudo systemctl restart odoo17.service
```

- Hay que ir al menú "Apps" "Update Apps List".

aviso: Tras esos dos pasos, el nuevo módulo estará disponible dentro de Odoo. Pero a veces no aparece en la búsqueda cuando está activo el filtro `Apps`. Quitando ese filtro, deberia aparecer al buscarlo.

> nota: Para que un módulo sea una "App" de pleno derecho, hay que incluir esta línea en su `__manifest__.py`
```
  'application': True,
```

> nota: Para que un módulo se pueda instalar, hay que incluir esta línea en su `__manifest__.py`
```
  'installable': True,
```

aviso: Para que un nuevo módulo tenga presencia en los menús, ha de tener algún menú declarado. Al igual que para que tenga un interfaz de usuario, ha de tener alguna vista declarada.


### Dotarlo de un modelo de datos

Un modelo de datos declara la estructura de la información intrínseca que maneja un módulo, sus campos internos (fields). Los modelos de datos se declaran en código Python (.py), en una carpeta  `models`.

Hay algunos campos que el sistema añade automáticamente a todos los modelos. De entre ellos, al campo `_name` es obligatorio asignarle un valor y al campo `_description` es muy recomendable asignarselo también.

El ORM de Odoo creará y manejará automáticamente la tabla correspondiente en la base de datos, poniendole las columnas respectivas para los campos que se declaren como `Fields` en el modelo.

> nota: si se indica expresamente con el campo `_auto = False`, el ORM no creará ninguna tabla para ese modelo. 

Por ejemplo, el código:
```
from odoo import models, fields, api

class RankingDeUsuarios(models.Model):
  _name = 'pruebas_yexperimentos.ranking_de_usuarios'
  _description = 'Resultados de la competición QuizNavidad2024 entre empleados de la empresa.'

  user_id = fields.Many2one('hr.employee', string="Employee", required=True)
  date_played = fields.Datetime(string="Date Played", required=True)
  score = fields.Integer(string="Score", required=True)
```
crearia la tabla:
```
                                         Table "public.ranking_de_participantes"
   Column    |            Type             | Collation | Nullable |                       Default                        
-------------+-----------------------------+-----------+----------+------------------------------------------------------
 id          | integer                     |           | not null | nextval('ranking_de_participantes_id_seq'::regclass)
 user_id     | integer                     |           | not null | 
 score       | integer                     |           | not null | 
 create_uid  | integer                     |           |          | 
 write_uid   | integer                     |           |          | 
 name        | character varying           |           |          | 
 description | text                        |           |          | 
 date_played | timestamp without time zone |           | not null | 
 create_date | timestamp without time zone |           |          | 
 write_date  | timestamp without time zone |           |          | 
Indexes:
    "ranking_de_participantes_pkey" PRIMARY KEY, btree (id)
```


[Server framework 101 Tutorial - Chapter 3: Models And Basic Fields](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/03_basicmodel.html)

[Fields and widgets](https://www.odoo.com/documentation/17.0/applications/studio/fields.html)

[Field - referece](https://www.odoo.com/documentation/17.0/es/developer/reference/backend/orm.html#odoo.fields.Field)

[Server framework 101 Tutorial - Chapter 10: Constraints - prevenir la introducción de datos erróneos o incoherentes](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/10_constraints.html)

#### Basic Fields

Campos con valores básicos: números, texto, booleanos,...

[Basic Fields](https://www.odoo.com/documentation/17.0/es/developer/reference/backend/orm.html#basic-fields)

#### Other basic Fields

Campos con valores algo más elaborados: cantidades monetarias, texto multilínea, enumeraciones para seleccionar, archivos adjuntos, páginas web, imágenes,...

[Advanced Fields](https://www.odoo.com/documentation/17.0/es/developer/reference/backend/orm.html#advanced-fields)

#### Date/Time Fields

Campos con valores de fecha/hora.

[Date/Time Fields](https://www.odoo.com/documentation/17.0/es/developer/reference/backend/orm.html#date-time-fields)

#### Relational Fields

Campos que permiten relacionar este modelo de datos con otros modelos en este o en otros módulos. (Es decir, permiten ligar -JOIN- esta tabla con otras tablas de la base de datos.)

[Server framework 101 Tutorial - Chapter 7: Relations Between Models](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/07_relations.html)

[What are Relational Fields in Odoo](https://www.cybrosys.com/blog/relational-fields-in-odoo)

[Relational Fields and Widgets In Odoo](https://www.kanakinfosystems.com/blog/relational-fields-and-widgets-in-odoo)

[Relational Fields](https://www.odoo.com/documentation/17.0/es/developer/reference/backend/orm.html#relational-fields)

[Computed Fields - Related Fields](https://www.odoo.com/documentation/17.0/es/developer/reference/backend/orm.html#related-fields)

[Computed Fields - search Domains](https://www.odoo.com/documentation/17.0/es/developer/tutorials/backend.html#domains)


#### Computed Fields

Campos calculados (o consultados) sobre la marcha, a partir de valores en otros campos.

Estos campos no se suelen guardar en la base de datos. 

[Server framework 101 Tutorial - Chapter 8: Computed Fields And Onchanges](https://www.odoo.com/documentation/17.0/developer/tutorials/server_framework_101/08_compute_onchange.html)

[Computed Fields](https://www.odoo.com/documentation/17.0/es/developer/reference/backend/orm.html#computed-fields)


#### Carga de datos en un módulo y módulos "solo datos"

Los datos a cargar suelen ir dentro de una carpeta `data` dentro del módulo, en archivos CSV o XML. Esos archivos ha de ir declarados en el apartado correspondiente de `__manifest__.py`.

[Define module data](https://www.odoo.com/documentation/17.0/developer/tutorials/define_module_data.html#data-declaration)

[Data Files - reference](https://www.odoo.com/documentation/17.0/developer/reference/backend/data.html#reference-data)

> nota: Para cualquier nuevo módulo que se cree, se recomienda prepararle un juego de datos "demo".  De esta forma, quien desee evaluar nuestro módulo podrá cargar esos datos de muestra al instalarselo y ver así el módulo trabajando con algo concreto en lugar de vacio. Estos datos suelen ir dentro de una carpeta `demo`, en archivos CSV o XML; y estos archivos han de ir declarados en el apartado correspondiente de `__manifest__.py`.

Además de datos que un módulo pueda necesitar para su correcto funcionamiento. Pueden existir algunos módulos cuya única misión es declarar datos, en formato XML o CSV. (Es decir, no tienen ni interfaces ni funcionalidad alguna.)

Estos módulos "solo datos" se utilizan para cargar esos datos en el sistema Odoo. Por ejemplo: para inicializar la información base de una empresa, para incorporar datos de otras fuentes, para preparar una demo, para preparar un curso, para...


### Declarar permisos de uso

Cada módulo Odoo puede requerir una serie de derechos que el usuario ha de tener para realizar según qué acciones.

[Server framework 101 Tutorial - Chapter 4: Security - A Brief Introduction](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/04_securityintro.html#access-rights)

La declaración de estos permisos suele ir en un archivo `ir.model.access.csv`, en una carpeta  `security` dentro del módulo.

> ¡Importante!, Odoo no mostrará nada de un módulo hasta que no se defina alguna regla de acceso para el modelo de datos de dicho módulo. El módulo puede estar instalado y tener todos los componentes necesarios (menús, vistas,...), pero estos no se mostrarán hasta que exista alguna regla de acceso.

Por ejemplo
````
id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
access_ranking_de_participantes,ranking_de_participantes,model_ranking_de_participantes,base.group_user,1,1,1,1
````


### Dotarlo de un interfaz gráfico de usuario

El interfaz gráfico permite que el módulo sea manejado por personas. Las vistas, formularios, menús,... se declaran en archivos XML (.xml), en una carpeta `views`.

[Server framework 101 Tutorial - Chapter 5: Finally, Some UI To Play With](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/05_firstui.html)

[Menus](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/05_firstui.html#menus)

[Server framework 101 Tutorial - Chapter 6: Basic Views](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/06_basicviews.html)

[List view](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/06_basicviews.html#list)

[Form view](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/06_basicviews.html#form)

[Search view](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/06_basicviews.html#search)

[Server framework 101 Tutorial - Chapter 11: Add The Sprinkles - aderezos para hacer más vistoso y presentable el interfaz](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/11_sprinkles.html)

[Server framework 101 Tutorial - Chapter 14: A Brief History Of QWeb Templates](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/14_qwebintro.html) 

[Build PDF Reports with QWeb](https://www.odoo.com/documentation/17.0/es/developer/tutorials/pdf_reports.html)

[Discover the web framework and Owl components](https://www.odoo.com/documentation/17.0/developer/tutorials/discover_js_framework.html)

#### Menus

Hay dos tipos de menús:

- El menú principal, lo primero que se vé del módulo, el que aparecerá en el menú general desplegable de Oddo (parte derecha de la pantalla)

- Submenús secundarios, que aparecerán en la barra horizontal (parte superior de la pantalla); una vez se haya elegido el menú del módulo en el menú general.

El menú principal suele ir en un archivo `menu.xml`
````
    <menuitem id="pruebas_y_experimentos_menu_root" 
              name="Pruebas y Experimentos" 
              sequence="10" />
````

Los menús secundarios pueden ir también en ese archivo o pueden ir en cualquier otra vista .xml a la que den acceso con su "action"
````
    <menuitem id="ranking_de_participantes_menu" 
              name="Ranking de participantes" 
              parent="pruebas_y_experimentos_menu_root"
              action="action_ranking_de_participantes"
              sequence="10" />
````



#### Vistas y formularios

Las vistas y formularios suelen definir en archivos .xml dentro de la carpeta `views`. Se ha de declarar como mínimo un "record" de tipo `ir.ui.view` y otro de tipo `ir.actions.act_window`.

Por ejemplo:
````
<odoo>
  <data>

    <record id="view_ranking_de_participantes_tree" model="ir.ui.view" >
      <field name="name">ranking.de.participantes.list</field>
      <field name="model">ranking.de.participantes</field>
      <field name="arch" type="xml">
        <tree>
          <field name="user_id"/>
          <field name="user_name">user_id.name</field>
          <field name="user_work_email">user_id.work_email</field>
          <field name="score"/>
          <field name="date_played"/>
        </tree>
      </field>
    </record>

    <record id="action_ranking_de_participantes" model="ir.actions.act_window">  
        <field name="name">Ranking de participantes</field>
        <field name="type">ir.actions.act_window</field>
        <field name="res_model">ranking.de.participantes</field> 
        <field name="view_mode">tree,form</field>
    </record>

    <menuitem id="ranking_de_participantes_menu" 
              name="Ranking de participantes" 
              parent="pruebas_y_experimentos_menu_root"
              action="action_ranking_de_participantes"
              sequence="10" />
             
  </data>
</odoo>
````

Si solo se ponen `<field>`s en una vista o en un formulario, su apariencia será automáticamente la estandard de Odoo. 

Para hacer algo más elaborado, se han de utilizar componentes `QWeb` y `Owl`; y/o utilizar directamente HTML5, CSS, JavaScript,...

[Discover the Web Framework](https://www.odoo.com/documentation/17.0/developer/tutorials/discover_js_framework.html)

[Master the Web Framework](https://www.odoo.com/documentation/17.0/developer/tutorials/master_odoo_web_framework.html)


### Dotarlo de funcionalidad

La funcionalidad es lo que el módulo hace, las acciones que realiza. Va programada en código Python (.py)

[Server framework 101 Tutorial - Chapter 8: Computed Fields And Onchanges](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/08_compute_onchange.html) 

[Server framework 101 Tutorial - Chapter 9: Ready For Some Action?](https://www.odoo.com/documentation/17.0/es/developer/tutorials/server_framework_101/09_actions.html)


### Dotarlo de una API

El interfaz API permite que el módulo sea manejado desde otros programas externos a Odoo. Va programada en código Python (.py), en una carpeta `controllers`.

[Web Services:  XML-RPC or JSON-RPC](https://www.odoo.com/documentation/17.0/es/developer/howtos/web_services.html)



### Traducciones a otros idiomas (internazionalization, i18n)

https://www.odoo.com/documentation/17.0/es/developer/howtos/translations.html

La declaración de textos en diversos idiomas suele ir en archivos .po, en una carpeta denominada `i18n` dentro del módulo.


### Algo de documentación acerca del desarrollo de módulos

[How To Create Module In Odoo 16 || Create Models, Menus, Actions and Views - Odoo Mates](https://youtu.be/IeJFxmCG2Qs)

[Creating Odoo modules - Cybrosys Technologies](https://www.cybrosys.com/odoo/odoo-books/odoo-17-development/creating-odoo-modules/)

[Odoo 17 Development Tutorials - Cybrosys Technologies](https://www.youtube.com/watch?v=VGD6YWuqYqA&list=PLeJtXzTubzj9TzatXRcacLWilIgNrmRVt)

[Odoo 17 Developement - Odoo Mates](https://www.youtube.com/watch?v=kxbPgOLkNxw&list=PLqRRLx0cl0hq0T4SV-BHhCicWOpzyWcHd)

[Easy Odoo Module Development - Exploring Odoo](https://www.youtube.com/watch?v=wWnZu7-63jU&list=PLX6eXpRg2kb3Zqta0tZOF_p0d_DokohhP)

[Odoo 17 and 18 Development Tutorial - WebLearns](https://www.youtube.com/watch?v=oHqv25vPmng&list=PLAR8TpPnVeTTt2EpERduzawPjD4ToMtvc)



## Apéndice: algunos recursos interesantes

[Asociación Española de Odoo - canal Youtube](https://www.youtube.com/@aeodoo)

[AdHoc, consultora argentina - canal Youtube](https://www.youtube.com/@somosadhoc)

[OdooMates - Youtbe channel](https://www.youtube.com/@OdooMates/videos)

https://runboot.odoo.com/

https://odoo-community.org/blog/the-oca-blog-1/post/goodbye-runbot-welcome-runboat-116

[Asociación Española de Odoo](https://www.aeodoo.org/)

[Avanzosc, una empesa de Azkoitia](https://www.avanzosc.es/#top)

https://github.com/odoo

https://github.com/oca

https://github.com/aeodoo

https://github.com/avanzosc


[Muhammad Nasser - Odoo17 Development Course (Arabic)](https://www.youtube.com/watch?v=492GlvfvDB0&list=PLFSlYEuka9lvpCEFgciH4awFj3_7lm-9g)

[Juventud Productiva Venezolana - Curso de Oddo18](https://www.youtube.com/watch?v=oSiXa0OtObo&list=PLZHhaK4KCZZz1mYrupOv7ZcHzw_qfPZpR&index=7)

[Odoo Studio - course](https://www.odoo.com/slides/studio-31)

[Getting Started with Odoo - course](https://www.odoo.com/slides/getting-started-15)

[courses - all](https://www.odoo.com/slides/all)