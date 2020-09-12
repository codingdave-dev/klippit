// CREATE NEW CAMPAIGN HELPER
export const createNewCampaignHelper = (user, createdAt, photoURL, values) => {
    return {
        createAt: createdAt,
        addedBy: user.displayName,
        addedByUid: user.uid,
        approved: false,
        numberOfReviews: 0,
        rating: 0,
        ratingTotal: 0,
        photoURL: photoURL,
        ...values
    }
}
