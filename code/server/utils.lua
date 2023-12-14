src = {}

Citizen.CreateThread(function()
    zof.prepare("mdt/create_all_tables", [[
        CREATE TABLE IF NOT EXISTS `mdt_avisos` (
            `id` INT(11) NOT NULL AUTO_INCREMENT,
            `titulo` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `descricao` VARCHAR(255) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `data` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `autor` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `id_autor` INT(11) NULL DEFAULT NULL,
            `org` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            PRIMARY KEY (`id`) USING BTREE
        ) COLLATE='latin1_swedish_ci' ENGINE=InnoDB;

        CREATE TABLE IF NOT EXISTS `mdt_codigo_penal` (
            `id` INT(11) NOT NULL AUTO_INCREMENT,
            `nome_codigo` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `descricao` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `tempo` INT(11) NULL DEFAULT NULL,
            `multa` INT(11) NULL DEFAULT NULL,
            PRIMARY KEY (`id`) USING BTREE
        ) COLLATE='latin1_swedish_ci' ENGINE=InnoDB;

        CREATE TABLE IF NOT EXISTS `mdt_cursos` (
            `id_curso` INT(11) NOT NULL AUTO_INCREMENT,
            `oficial` INT(11) NULL DEFAULT NULL,
            `descricao` VARCHAR(255) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `cds_local` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `participantes` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `img` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `pre_requisitos` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `data` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            PRIMARY KEY (`id_curso`) USING BTREE
        ) COLLATE='latin1_swedish_ci' ENGINE=InnoDB;

        CREATE TABLE IF NOT EXISTS `mdt_hierarquia` (
            `user_id` INT(11) NOT NULL,
            `nome` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `cargo` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `org` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `unidade` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `cursos` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `timeline` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `pontos` INT(11) NULL DEFAULT NULL,
            `time_ptr` INT(11) NULL DEFAULT NULL,
            `dt_entrada` INT(11) NULL DEFAULT NULL,
            PRIMARY KEY (`user_id`) USING BTREE
        ) COLLATE='latin1_swedish_ci' ENGINE=InnoDB;

        CREATE TABLE IF NOT EXISTS `mdt_historico_acoes` (
            `id` INT(11) NOT NULL AUTO_INCREMENT,
            `oficial_responsavel` INT(11) NULL DEFAULT NULL,
            `escalados` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `data` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `ganha` INT(11) NULL DEFAULT NULL,
            PRIMARY KEY (`id`) USING BTREE
        ) COLLATE='latin1_swedish_ci' ENGINE=InnoDB;

        CREATE TABLE IF NOT EXISTS `mdt_historico_penal` (
            `id` INT(11) NOT NULL AUTO_INCREMENT,
            `user_id` INT(11) NULL DEFAULT NULL,
            `nome` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `valor_multa` INT(11) NULL DEFAULT NULL,
            `tempo` INT(11) NULL DEFAULT NULL,
            `codigos_penais` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `data` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `descricao` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `oficiais` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `imgs` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `mugshot` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `is_multa` INT(11) NULL DEFAULT NULL,
            PRIMARY KEY (`id`) USING BTREE
        ) COLLATE='latin1_swedish_ci' ENGINE=InnoDB;

        CREATE TABLE IF NOT EXISTS `mdt_perms_cargos` (
            `cargo` VARCHAR(100) NOT NULL COLLATE 'latin1_swedish_ci',
            `org` VARCHAR(100) NOT NULL COLLATE 'latin1_swedish_ci',
            `perms` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            PRIMARY KEY (`cargo`, `org`) USING BTREE
        ) COLLATE='latin1_swedish_ci' ENGINE=InnoDB;

        CREATE TABLE IF NOT EXISTS `mdt_presos` (
            `user_id` INT(11) NOT NULL,
            `id_historico_penal` INT(11) NULL DEFAULT NULL,
            `nome` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `foto` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `tempo` INT(11) NULL DEFAULT NULL,
            `autor` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `id_autor` INT(11) NULL DEFAULT NULL,
            PRIMARY KEY (`user_id`) USING BTREE
        ) COLLATE='latin1_swedish_ci' ENGINE=InnoDB;

        CREATE TABLE IF NOT EXISTS `mdt_unidades` (
            `id` INT(11) NOT NULL AUTO_INCREMENT,
            `org` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `nome` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `emblema` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            PRIMARY KEY (`id`) USING BTREE
        ) COLLATE='latin1_swedish_ci' ENGINE=InnoDB;

        CREATE TABLE IF NOT EXISTS `mdt_veiculos_detidos` (
            `user_id` INT(11) NOT NULL,
            `placa` VARCHAR(20) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `modelo` VARCHAR(100) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `motivo` VARCHAR(255) NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `valor` INT(11) NULL DEFAULT NULL,
            `img` TEXT NULL DEFAULT NULL COLLATE 'latin1_swedish_ci',
            `oficial` INT(11) NULL DEFAULT NULL,
            PRIMARY KEY (`user_id`) USING BTREE
        ) COLLATE='latin1_swedish_ci' ENGINE=InnoDB;
    ]])

    -- DROP TABLE IF EXISTS mdt_codigo_penal;

    zof.prepare("mdt/drop_all_tables", [[
        DROP TABLE IF EXISTS mdt_perms_cargos;
        DROP TABLE IF EXISTS mdt_hierarquia;
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
    zof.prepare("mdt/mdt_hierarquia/insert", [[ INSERT INTO mdt_hierarquia(user_id, nome, cargo, org, unidade, cursos, pontos, time_ptr, dt_entrada, timeline) VALUES(@user_id, @nome, @cargo, @org, @unidade, @cursos, @pontos, @time_ptr, @dt_entrada, @timeline) ]])
    zof.prepare("mdt/mdt_hierarquia/deletePlayer", [[ DELETE FROM mdt_hierarquia WHERE user_id = @user_id ]])
    zof.prepare("mdt/mdt_hierarquia/updateXpPlayer", [[ UPDATE mdt_hierarquia SET pontos = @xp WHERE user_id = @user_id ]])
    zof.prepare("mdt/mdt_hierarquia/updateCargoPlayer", [[ UPDATE mdt_hierarquia SET cargo = @cargo WHERE user_id = @user_id ]])
    zof.prepare("mdt/mdt_hierarquia/updateTimelinePlayer", [[ UPDATE mdt_hierarquia SET timeline = @timeline WHERE user_id = @user_id ]])

    zof.prepare("mdt/mdt_avisos/insert", "INSERT INTO mdt_avisos(titulo, descricao, data, autor, id_autor, org) VALUES(@titulo, @descricao, @data, @autor, @id_autor, @org)")
    zof.prepare("mdt/mdt_avisos/delete", "DELETE FROM mdt_avisos WHERE id = @id")
    zof.prepare("mdt/mdt_avisos/getFromOrg", "SELECT * FROM mdt_avisos WHERE org = @org")

    zof.prepare("mdt/mdt_historico_penal/insert", "INSERT INTO mdt_historico_penal(user_id, nome, valor_multa, tempo, codigos_penais, data, descricao, oficiais, imgs, mugshot, is_multa) VALUES(@user_id, @nome, @valor_multa, @tempo, @codigos_penais, @data, @descricao, @oficiais, @imgs, @mugshot, @is_multa)")
    zof.prepare("mdt/mdt_historico_penal/get", "SELECT * FROM mdt_historico_penal WHERE id = @id")
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

function table.contains(table, element)
    for _, value in pairs(table) do
      if value == element then
        return true
      end
    end
    
    return false
end

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
