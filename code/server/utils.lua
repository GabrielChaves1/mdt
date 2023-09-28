src = {}

Citizen.CreateThread(function()
    zof.prepare("mdt/create_all_tables", [[
        CREATE TABLE IF NOT EXISTS mdt_perms_cargos(
            cargo VARCHAR(100),
            org VARCHAR(100),
            perms TEXT,
            PRIMARY KEY (cargo, org)
        );

        CREATE TABLE IF NOT EXISTS mdt_hierarquia(
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

        CREATE TABLE IF NOT EXISTS mdt_codigo_penal(
            id INT AUTO_INCREMENT,
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

        CREATE TABLE IF NOT EXISTS mdt_curso_perm(
            id_curso INT,
            permissao VARCHAR(255),
            PRIMARY KEY (id_curso)
        );

        CREATE TABLE IF NOT EXISTS mdt_historico_penal(
            id INT AUTO_INCREMENT,
            user_id INT,
            nome VARCHAR(100),
            valor_multa INT,
            tempo INT,
            codigos_penais TEXT,
            data INT,
            descricao TEXT,
            oficiais TEXT,
            imgs TEXT,
            is_multa INT,
            PRIMARY KEY (id)
        );

        CREATE TABLE IF NOT EXISTS mdt_historico_acoes(
            id INT AUTO_INCREMENT,
            oficial_responsavel INT,
            escalados TEXT,
            data INT,
            ganha INT,
            PRIMARY KEY (id)
        );

        CREATE TABLE IF NOT EXISTS mdt_unidades(
            id INT AUTO_INCREMENT,
            org VARCHAR(100),
            nome VARCHAR(100),
            emblema TEXT,
            PRIMARY KEY (id)
        );

        CREATE TABLE IF NOT EXISTS mdt_avisos(
            id INT AUTO_INCREMENT,
            titulo VARCHAR(100),
            descricao VARCHAR(255),
            data INT,
            autor VARCHAR(100),
            id_autor INT,
            org VARCHAR(100),
            PRIMARY KEY (id)
        );

        CREATE TABLE IF NOT EXISTS mdt_presos(
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
        DROP TABLE IF EXISTS mdt_presos;
    ]])

    
    zof.prepare("mdt/mdt_perms_cargos/getAll", "SELECT * FROM mdt_perms_cargos")
    zof.prepare("mdt/mdt_perms_cargos/insert", "INSERT INTO mdt_perms_cargos(cargo, org, perms) VALUES(@cargo, @org, @perms)")
    zof.prepare("mdt/mdt_perms_cargos/update", "UPDATE mdt_perms_cargos SET perms = @perms WHERE cargo = @cargo AND org = @org")

    zof.prepare("mdt/mdt_hierarquia/getFromOrg", [[ SELECT * FROM mdt_hierarquia WHERE org = @org ]])
    zof.prepare("mdt/mdt_hierarquia/getPlayer", [[ SELECT * FROM mdt_hierarquia WHERE user_id = @user_id ]])
    zof.prepare("mdt/mdt_hierarquia/insert", [[ INSERT INTO mdt_hierarquia(user_id, nome, cargo, org, unidade, cursos, pontos, time_ptr, dt_entrada) VALUES(@user_id, @nome, @cargo, @org, @unidade, @cursos, @pontos, @time_ptr, @dt_entrada) ]])
    zof.prepare("mdt/mdt_hierarquia/deletePlayer", [[ DELETE FROM mdt_hierarquia WHERE user_id = @user_id ]])

    zof.prepare("mdt/mdt_avisos/insert", "INSERT INTO mdt_avisos(titulo, descricao, data, autor, id_autor, org) VALUES(@titulo, @descricao, @data, @autor, @id_autor, @org)")
    zof.prepare("mdt/mdt_avisos/delete", "DELETE FROM mdt_avisos WHERE id = @id")
    zof.prepare("mdt/mdt_avisos/getFromOrg", "SELECT * FROM mdt_avisos WHERE org = @org")

    zof.prepare("mdt/mdt_historico_penal/insert", "INSERT INTO mdt_historico_penal(user_id, nome, valor_multa, tempo, codigos_penais, data, descricao, oficiais, imgs, is_multa) VALUES(@user_id, @nome, @valor_multa, @tempo, @codigos_penais, @data, @descricao, @oficiais, @imgs, @is_multa)")
    zof.prepare("mdt/mdt_historico_penal/getAll", "SELECT * FROM mdt_historico_penal")
    zof.prepare("mdt/mdt_historico_penal/getLastIdInserted", "SELECT id FROM mdt_historico_penal ORDER BY id DESC LIMIT 1")

    zof.prepare("mdt/mdt_presos/insert", "INSERT INTO mdt_presos(user_id, id_historico_penal, nome, foto, tempo, autor, id_autor) VALUES(@user_id, @id_historico_penal, @nome, @foto, @tempo, @autor, @id_autor)")
    zof.prepare("mdt/mdt_presos/delete", "DELETE FROM mdt_presos WHERE user_id = @user_id")
    zof.prepare("mdt/mdt_presos/update", "UPDATE mdt_presos SET tempo = @tempo WHERE user_id = @user_id")
    zof.prepare("mdt/mdt_presos/getAll", "SELECT * FROM mdt_presos")
    zof.prepare("mdt/mdt_presos/get", "SELECT * FROM mdt_presos WHERE user_id = @user_id")

    zof.prepare("mdt/mdt_codigo_penal/insert", "INSERT INTO mdt_codigo_penal(nome_codigo, descricao, tempo, multa) VALUES(@nome_codigo, @descricao, @tempo, @multa)")
    zof.prepare("mdt/mdt_codigo_penal/delete", "DELETE FROM mdt_codigo_penal WHERE id = @id")
    zof.prepare("mdt/mdt_codigo_penal/update", "UPDATE mdt_codigo_penal SET nome_codigo = @nome_codigo, descricao = @descricao, tempo = @tempo, multa = @multa WHERE id = @id")
    zof.prepare("mdt/mdt_codigo_penal/getAll", "SELECT * FROM mdt_codigo_penal")
    zof.prepare("mdt/mdt_codigo_penal/getLastIdInserted", "SELECT id FROM mdt_codigo_penal ORDER BY id DESC LIMIT 1")
    
    -- zof.execute("mdt/drop_all_tables")
    Citizen.Wait(1000)

    zof.execute("mdt/create_all_tables")
end)

function returnDateFormat()
    local dia = string.format("%02d", tonumber(os.date("%d", os.time())))
    local mes = string.format("%02d", tonumber(os.date("%m", os.time())))
    local ano = tonumber(os.date("%Y", os.time()))

    return dia .. "/" .. mes .. "/" .. ano
end

RegisterServerEvent("trydeleteobj")
AddEventHandler("trydeleteobj", function(index)
    TriggerClientEvent("syncdeleteobj", -1, index)
end)