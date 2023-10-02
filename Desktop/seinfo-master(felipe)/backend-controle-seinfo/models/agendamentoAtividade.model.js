module.exports = (sequelize, Sequelize) => {
  const AgAtividade = sequelize.define(
    'agendamentoAtividade',
    {
      idAtividade: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'atividade',
          key: 'idAtividade',
        },
        field: 'idAtividade',
      },
      idAgenda: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'agenda',
          key: 'idAgenda',
        },
        field: 'idAgenda',
      },
    },
    {
      // Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
      tableName: 'agendamentoAtividade',
      timestamps: false,
      createdAt: false,
    }
  );

  AgAtividade.associate = (models) => {
    models.atividade.belongsToMany(models.agenda, {
      as: 'atvAgenda',
      through: models.agendamentoAtividade,
      foreignKey: 'idAtividade',
      onUpdate: 'cascade',
      onDelete: 'cascade',
    });

    models.agenda.belongsToMany(models.atividade, {
      as: 'agendaAtv',
      through: models.agendamentoAtividade,
      foreignKey: 'idAgenda',
      onUpdate: 'cascade',
      onDelete: 'cascade',
    });
  };

  return AgAtividade;
};
