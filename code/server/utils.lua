src = {}

Citizen.CreateThread(function()
    zof.prepare("mdt/create_all_tables", [[
        CREATE TABLE IF NOT EXISTS mdt_perms_cargos(
            cargo VARCHAR(100),
            org VARCHAR(100),
            PRIMARY KEY (cargo, org)
        );

        CREATE TABLE IF NOT EXISTS mdt_hierarquia(
            user_id INT,
            cargo VARCHAR(100),
            org VARCHAR(100),
            unidade VARCHAR(100),
            cursos TEXT,
            pontos INT,
            time_ptr INT,
            dt_entrada INT,
            PRIMARY KEY (user_id)
        );

        CREATE TABLE IF NOT EXISTS mdt_codigo_penal(
            id INT,
            nome_codigo VARCHAR(100),
            descricao TEXT,
            tempo INT,
            multa INT,
            PRIMARY KEY (id)
        );

        CREATE TABLE IF NOT EXISTS mdt_veiculos_detidos(
            user_id INT,
            placa VARCHAR(20),
            modelo VARCHAR(100),
            motivo VARCHAR(255),
            valor INT,
            img TEXT,
            oficial INT,
            PRIMARY KEY (user_id)
        );

        CREATE TABLE IF NOT EXISTS mdt_cursos(
            id_curso INT,
            oficial INT,
            descricao VARCHAR(255),
            cds_local VARCHAR(100),
            participantes TEXT,
            img TEXT,
            pre_requisitos TEXT,
            data INT,
            PRIMARY KEY (id_curso)
        );

        CREATE TABLE IF NOT EXISTS mdt_curso_perm(
            id_curso INT,
            permissao VARCHAR(255),
            PRIMARY KEY (id_curso)
        );

        CREATE TABLE IF NOT EXISTS mdt_historico_penal(
            id INT,
            user_id INT,
            codigos_penais TEXT,
            data INT,
            descricao TEXT,
            oficiais TEXT,
            img TEXT,
            is_multa INT,
            PRIMARY KEY (id)
        );

        CREATE TABLE IF NOT EXISTS mdt_historico_acoes(
            id INT,
            oficial_responsavel INT,
            escalados TEXT,
            data INT,
            ganha INT,
            PRIMARY KEY (id)
        );

        CREATE TABLE IF NOT EXISTS mdt_unidades(
            id INT,
            org VARCHAR(100),
            nome VARCHAR(100),
            emblema TEXT,
            PRIMARY KEY (id)
        );

        CREATE TABLE IF NOT EXISTS mdt_avisos(
            id INT,
            titulo VARCHAR(100),
            descricao VARCHAR(255),
            data INT,
            oficial INT,
            PRIMARY KEY (id)
        );
    ]])

    zof.prepare("mdt/drop_all_tables", [[
        DROP TABLE IF EXISTS mdt_perms_cargos;
        DROP TABLE IF EXISTS mdt_hierarquia;
        DROP TABLE IF EXISTS mdt_codigo_penal;
        DROP TABLE IF EXISTS mdt_veiculos_detidos;
        DROP TABLE IF EXISTS mdt_cursos;
        DROP TABLE IF EXISTS mdt_curso_perm;
        DROP TABLE IF EXISTS mdt_historico_penal;
        DROP TABLE IF EXISTS mdt_historico_acoes;
        DROP TABLE IF EXISTS mdt_unidades;
        DROP TABLE IF EXISTS mdt_avisos;
    ]])
    
    -- zof.execute("mdt/drop_all_tables")
    zof.execute("mdt/create_all_tables")
end)