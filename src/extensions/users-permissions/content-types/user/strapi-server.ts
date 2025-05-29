export default {
  async afterCreate(event) {
    const { result } = event;

    // 🔁 Cambia l'ID con quello corretto per il ruolo "Candidato"
    const candidatoRoleId = 3;

    // ⚙️ Aggiorna il ruolo dell'utente appena creato
    await strapi.entityService.update('plugin::users-permissions.user', result.id, {
      data: {
        role: candidatoRoleId,
      },
    });
  },
};
