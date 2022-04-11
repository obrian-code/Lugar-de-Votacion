"use strict";

const datos_json = {
    "databd": [
        {
            "type": "No es miembro de mesa",
            "region": "Amazonas/Chachapoyas/Chachapoyas",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Rs. Paseo Prado"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Amazonas/Bagua/Bagua",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "PR Combate De Angamos 637",
            "referencia": "ND Corbeta La Unión Mz B Lt.4"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Amazonas/Bongará/Jumbilla",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "Lt 16MZ B Urb Virgen del Pilar",
            "referencia": "ND Corbeta La Unión Mz B Lt.4"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Amazonas/Condorcanqui/Santa María de Nieva",
            "local": " Las Artes Norte 509 Of. 202",
            "direccion": "Calle Huascar 286",
            "referencia": "ND Corbeta La Unión Mz B Lt.4"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Amazonas/Luya/Lámud",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "Av Homori Delagado 186",
            "referencia": "ND Corbeta La Unión Mz B Lt.4"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Amazonas/Rodríguez de Mendoza/Mendoza",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "Av Abancay 978",
            "referencia": "Calle Huascar 286"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Amazonas/Utcubamba/Bagua Grande",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "Av Homori Delagado 186",
            "referencia": "ND Corbeta La Unión Mz B Lt.4"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Áncash/Chimbote/Santa",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "Av Homori Delagado 186",
            "referencia": "ND Corbeta La Unión Mz B Lt.4"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Áncash/Huaraz/Huaraz",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Áncash/Casma/Casma",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Áncash/Huarmey/Huarmey",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Áncash/Caraz/Huaylas",
             "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Áncash/Carhuaz/Carhuaz",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Áncash/Yungay/Yungay",
             "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Áncash/Pomabamba/Pomabamba",
             "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Áncash/Huari/Huari",
             "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Apurímac/Abancay/Abancay",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Apurímac/Andahuaylas/Andahuaylas",
             "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Apurímac/Antabamba/Antabamba",
             "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Apurímac/Aymaraes/Chalhuanca",
             "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Apurímac/Cotabambas/Tambobamba",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Apurímac/ Chincheros / Chincheros",
             "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Apurímac/Grau/Chuquibambilla",
             "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Arequipa/Arequipa/Arequipa",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "Av Abancay 978",
            "referencia": "Calle Huascar 286"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Arequipa/Camaná/Camaná",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Arequipa/Caravelí/Caravelí",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Arequipa/Castilla/Aplao",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Arequipa/Caylloma/Chivay",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Arequipa/Condesuyos/Chuquibamba",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "Av Abancay 978",
            "referencia": "Calle Huascar 286"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Arequipa/Islay/Mollendo",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Arequipa/La Unión/Cotahuasi",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ayacucho/Huamanga/Ayacucho",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ayacucho/Cangallo/Cangallo",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ayacucho/Huanca Sancos/Huanca Sancos",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ayacucho/Huanta/Huanta ",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ayacucho/La Mar/San Miguel",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ayacucho/Lucanas/Puquio ",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ayacucho/Parinacochas/Coracora",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ayacucho/Páucar del Sara/Sara",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ayacucho/Sucre/Querobamba",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ayacucho/Víctor Fajardo/Huancapi",
            "local": "La Pampilla",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Av. De Las Artes Norte 509 Of. 202"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ayacucho/Vilcashuamán/Vilcashuamán",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cajamarca/Cajamarca/Cajamarca",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cajamarca/Celendín/Celendín",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cajamarca/Chota/Chota",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cajamarca/Contumazá/Contumazá",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cajamarca/Cutervo/Cutervo",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cajamarca/Hualgayoc/Bambamarca",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cajamarca/Jaén/Jaén",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cajamarca/San Ignacio/San Ignacio de la Frontera",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cajamarca/San Marcos/San Marcos",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cajamarca/San Miguel/San Miguel de Pallaques ",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cajamarca/San Pablo/San Pablo",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cajamarca/Santa Cruz/Santa Cruz de Succhabamba",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Callao/Callao/Callao ",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Callao/Callao/Bellavista",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Callao/Callao/Carmen de La Legua-Reynoso",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Callao/Callao/La Perla ",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Callao/Callao/La Punta",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Callao/Callao/Ventanilla",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "Av Abancay 978",
            "referencia": "Calle Huascar 286"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Callao/Callao/Mi Perú",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "Av Abancay 978",
            "referencia": "Calle Huascar 286"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cuzco/Cuzco/Cuzco",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "Av Abancay 978",
            "referencia": "Calle Huascar 286"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cuzco/Acomayo/Acomayo",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cuzco/Anta/Anta",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "Av Abancay 978",
            "referencia": "Calle Huascar 286"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cuzco/Calca/Calca",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cuzco/Canas/Yanaoca",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "Av Abancay 978",
            "referencia": "Calle Huascar 286"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cuzco/Canchis/Sicuani",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "Av Abancay 978",
            "referencia": "Calle Huascar 286"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cuzco/Chumbivilcas/Santo Tomás",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cuzco/Espinar/Yauri",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cuzco/La Convención/Quillabamba",
            "local": "Las Artes Norte 509 Of. 202",
            "direccion": "Av Abancay 978",
            "referencia": "Calle Huascar 286"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cuzco/Paruro/Paruro",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cuzco/Paucartambo/Paucartambo",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cuzco/Quispicanchi/Urcos",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cuzco/Urubamba/Urubamba",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huancavelica/Huancavelica/Huancavelica",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huancavelica/Acobamba/Acobamba",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huancavelica/Angaraes/Lircay ",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huancavelica/Castrovirreyna/Castrovirreyna",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huancavelica/Churcampa/Churcampa",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huancavelica/Huaytará/Huaytará",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huancavelica/Tayacaja/Pampas",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huancavelica/Tayacaja/Pampas",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huánuco/Huánuco/Huánuco",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huánuco/Ambo/Ambo",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huánuco/Dos de Mayo/La Unión",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huánuco/Huacaybamba/Huacaybamba",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huánuco/Huamalíes/Llata",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huánuco/Leoncio Prado/Tingo María",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huánuco/Marañón/Huacrachuco",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huánuco/Pachitea/Panao",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huánuco/Puerto Inca/Puerto Inca",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huánuco/Lauricocha/Jesús",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huánuco/Yarowilca/Chavinillo",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ica/Ica/Ica",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ica/Chincha/Chincha Alta",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ica/Nazca/Nazca",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ica/Palpa/Palpa",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ica/Pisco/Pisco",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Junín/Huancayo/Huancayo",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Junín/Concepción/Concepción",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Junín/Chanchamayo/La Merced",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Junín/Jauja/Jauja",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Junín/Junín/Junín",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Junín/Tarma/Tarma",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Junín/Yauli/La Oroya",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Junín/Chupaca/Chupaca",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "La Libertad/Trujillo/Trujillo",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "La Libertad/Ascope/Ascope",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "La Libertad/Bolívar/Bolívar",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "La Libertad/Chepén/Chepén",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "La Libertad/Julcán/Julcán",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "La Libertad/Otuzco/Otuzco",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "La Libertad/Pacasmayo/San Pedro de Lloc",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "La Libertad/Pataz/Tayabamba",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "La Libertad/Sánchez Carrión/Huamachuco",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "La Libertad/Santiago de Chuco/Santiago de Chuco",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "La Libertad/Gran Chimú/Cascas",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "La Libertad/Virú/Virú",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Lambayeque/Chiclayo/Chiclayo",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Lambayeque/Ferreñafe/Ferreñafe",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Lambayeque/Lambayeque/Lambayeque",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Lima/Lima/Lima",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Lima/Barranca/Barranca",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Lima/Cajatambo/Cajatambo",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Lima/Canta/Canta ",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Lima/Cañete/Cañete",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Lima/Huaral/Huaral ",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Lima/Huarochirí/Matucana",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Lima/Huaura/Huacho",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Lima/Oyón/Oyón",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Lima/Yauyos/Yauyos",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Loreto/Maynas/Iquitos",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Loreto/Alto Amazonas/Yurimaguas",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Loreto/Loreto/Nauta",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Loreto/Mariscal Ramón Castilla/Caballococha",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Loreto/Requena/Requena",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Loreto/Ucayali/Contamana",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Loreto/Datem del Marañón/San Lorenzo",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Loreto/Putumayo/San Antonio del Estrecho",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Madre de Dios/Tambopata/Puerto Maldonado",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Madre de Dios/Manu/Salvación",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Madre de Dios/Tahuamanu/Iñapari",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Moquegua/Moquegua/Ilo",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Moquegua/Moquegua/General Sánchez Cerro",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Moquegua/Moquegua/Mariscal Nieto",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Pasco/Pasco/Cerro de Pasco",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Pasco/Daniel A. Carrión/Yanahuanca",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Pasco/Oxapampa/Oxapampa",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Piura/Piura/San Miguel de Piura",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Piura/Ayabaca/Ayabaca",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Piura/Huancabamba/Huancabamba",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Piura/Morropón/Chulucanas",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Piura/Paita/Paita",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Piura/Sullana/Sullana",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Piura/Talara/Talara",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Piura/Sechura/Sechura",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Puno/Puno/Puno",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Puno/Puno/Azángaro",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Puno/Puno/Carabaya",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Puno/Puno/Chucuito",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Puno/Puno/El Collao",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Puno/Puno/Huancané",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Puno/Puno/Lampa",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Puno/Puno/Melgar",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Puno/Puno/Moho",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Puno/Puno/Sandia",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Puno/Puno/San Antonio de Putina",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Puno/Puno/San Román",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Puno/Puno/Yunguyo",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "San Martin/Moyobamba/Moyobamba",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "San Martin/Bellavista/Bellavista",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "San Martin/El Dorado/San José de Sisa",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "San Martin/Huallaga/Saposoa",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "San Martin/Lamas/Lamas",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "San Martin/Mariscal Cáceres/Juanjuí",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "San Martin/Picota/Picota",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "San Martin/Rioja/Rioja",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "San Martin/San Martín/Tarapoto",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "San Martin/Tocache/Tocache",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Tacna/Tacna/Candarave",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Tacna/Tacna/Jorge Basadre",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Tacna/Tacna/Tacna",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Tacna/Tacna/Tarata",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Tumbes/Tumbes/Tumbes",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Tumbes/Zarumilla/Zarumilla",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Tumbes/Contralmirante Villar/Zorritos",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ucayali/Portillo/Pucallpa",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ucayali/Atalaya/Atalaya",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ucayali/Padre Abad/Aguaytía",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ucayali/Purús/Puerto Esperanza",
            "local": "MAGDALENA DEL MAR",
            "direccion": "Av. De Las Artes Norte 509 Of. 202",
            "referencia": "La Pampilla"
        }
    ]
}