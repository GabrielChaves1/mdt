src = {}

Citizen.CreateThread(function()
    zof.prepare("mdt/create_all_tables", [[
        CREATE TABLE mdt_perms_cargos(
            cargo VARCHAR(100),
            org VARCHAR(100),
            PRIMARY KEY (cargo, org)
        );

        CREATE TABLE mdt_hierarquia(
            user_id INT,
            nome VARCHAR(100),
            cargo VARCHAR(100),
            org VARCHAR(100),
            unidade VARCHAR(100),
            cursos TEXT,
            pontos INT,
            time_ptr INT,
            dt_entrada INT,
            PRIMARY KEY (user_id)
        );

        CREATE TABLE mdt_codigo_penal(
            id INT AUTO_INCREMENT,
            nome_codigo VARCHAR(100),
            descricao TEXT,
            tempo INT,
            multa INT,
            PRIMARY KEY (id)
        );

        CREATE TABLE mdt_veiculos_detidos(
            user_id INT,
            placa VARCHAR(20),
            modelo VARCHAR(100),
            motivo VARCHAR(255),
            valor INT,
            img TEXT,
            oficial INT,
            PRIMARY KEY (user_id)
        );

        CREATE TABLE mdt_cursos(
            id_curso INT AUTO_INCREMENT,
            oficial INT,
            descricao VARCHAR(255),
            cds_local VARCHAR(100),
            participantes TEXT,
            img TEXT,
            pre_requisitos TEXT,
            data INT,
            PRIMARY KEY (id_curso)
        );

        CREATE TABLE mdt_curso_perm(
            id_curso INT,
            permissao VARCHAR(255),
            PRIMARY KEY (id_curso)
        );

        CREATE TABLE mdt_historico_penal(
            id INT AUTO_INCREMENT,
            user_id INT,
            codigos_penais TEXT,
            data INT,
            descricao TEXT,
            oficiais TEXT,
            imgs TEXT,
            is_multa INT,
            PRIMARY KEY (id)
        );

        CREATE TABLE mdt_historico_acoes(
            id INT AUTO_INCREMENT,
            oficial_responsavel INT,
            escalados TEXT,
            data INT,
            ganha INT,
            PRIMARY KEY (id)
        );

        CREATE TABLE mdt_unidades(
            id INT AUTO_INCREMENT,
            org VARCHAR(100),
            nome VARCHAR(100),
            emblema TEXT,
            PRIMARY KEY (id)
        );

        CREATE TABLE mdt_avisos(
            id INT AUTO_INCREMENT,
            titulo VARCHAR(100),
            descricao VARCHAR(255),
            data INT,
            autor VARCHAR(100),
            id_autor INT,
            org VARCHAR(100),
            PRIMARY KEY (id)
        );

        CREATE TABLE mdt_presos(
            user_id INT,
            id_historico_penal INT,
            nome VARCHAR(100),
            foto TEXT,
            tempo INT,
            autor VARCHAR(100),
            id_autor INT,
            PRIMARY KEY (user_id)
        );
    ]])

    zof.prepare("mdt/drop_all_tables", [[
        DROP TABLE mdt_perms_cargos;
        DROP TABLE mdt_hierarquia;
        DROP TABLE mdt_codigo_penal;
        DROP TABLE mdt_veiculos_detidos;
        DROP TABLE mdt_cursos;
        DROP TABLE mdt_curso_perm;
        DROP TABLE mdt_historico_penal;
        DROP TABLE mdt_historico_acoes;
        DROP TABLE mdt_unidades;
        DROP TABLE mdt_avisos;
        DROP TABLE mdt_presos;
    ]])

    zof.prepare("mdt/mdt_hierarquia/getFromOrg", [[ SELECT * FROM mdt_hierarquia WHERE org = @org ]])
    zof.prepare("mdt/mdt_hierarquia/getPlayer", [[ SELECT * FROM mdt_hierarquia WHERE user_id = @user_id ]])
    zof.prepare("mdt/mdt_hierarquia/insert", [[ INSERT INTO mdt_hierarquia(user_id, nome, cargo, org, unidade, cursos, pontos, time_ptr, dt_entrada) VALUES(@user_id, @nome, @cargo, @org, @unidade, @cursos, @pontos, @time_ptr, @dt_entrada)) ]])
    zof.prepare("mdt/mdt_hierarquia/deletePlayer", [[ DELETE FROM mdt_hierarquia WHERE user_id = @user_id ]])

    zof.prepare("mdt/mdt_avisos/insert", "INSERT INTO mdt_avisos(titulo, descricao, data, autor, id_autor, org) VALUES(@titulo, @descricao, @data, @autor, @id_autor, @org)")
    zof.prepare("mdt/mdt_avisos/delete", "DELETE FROM mdt_avisos WHERE id = @id")
    zof.prepare("mdt/mdt_avisos/getFromOrg", "SELECT * FROM mdt_avisos WHERE org = @org")

    zof.prepare("mdt/mdt_historico_penal/insert", "INSERT INTO mdt_historico_penal(user_id, codigos_penais, data, descricao, oficiais, imgs, is_multa) VALUES(@user_id, @codigos_penais, @data, @descricao, @oficiais, @imgs, @is_multa)")
    zof.prepare("mdt/mdt_historico_penal/getAll", "SELECT * FROM mdt_historico_penal")
    zof.prepare("mdt/mdt_historico_penal/getLastIdInserted", "SELECT id FROM mdt_historico_penal ORDER BY id DESC LIMIT 1")

    zof.prepare("mdt/mdt_presos/insert", "INSERT INTO mdt_presos(user_id, id_historico_penal, nome, foto, tempo, autor, id_autor) VALUES(@user_id, @id_historico_penal, @nome, @foto, @tempo, @autor, @id_autor)")
    zof.prepare("mdt/mdt_presos/delete", "DELETE FROM mdt_presos WHERE user_id = @user_id")
    zof.prepare("mdt/mdt_presos/update", "UPDATE mdt_presos SET tempo = @tempo WHERE user_id = @user_id")
    zof.prepare("mdt/mdt_presos/getAll", "SELECT * FROM mdt_presos")
    zof.prepare("mdt/mdt_presos/get", "SELECT * FROM mdt_presos WHERE user_id = @user_id")
    
    
    zof.execute("mdt/drop_all_tables")

    Citizen.Wait(1000)

    zof.execute("mdt/create_all_tables")
end)

function returnDateFormat()
    local dia = string.format("%02d", tonumber(os.date("%d", os.time())))
    local mes = string.format("%02d", tonumber(os.date("%m", os.time())))
    local ano = tonumber(os.date("%Y", os.time()))

    return dia .. "/" .. mes .. "/" .. ano
end