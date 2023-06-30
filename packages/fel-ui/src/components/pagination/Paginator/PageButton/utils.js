// @flow

const pageNumber = (
    buttonIndex: number,
    currentPage: number,
    totalPagesCount: number,
) => {
    if (totalPagesCount >= 8) {
        switch (buttonIndex) {
            case 0:
                return buttonIndex + 1;

            case 1:
                return currentPage < 5 ? 2 : '...';

            case 2:
                if (currentPage < 5) {
                    return buttonIndex + 1;
                } else if (currentPage > totalPagesCount - 3) {
                    return totalPagesCount - 4;
                }
                return currentPage - 1;

            case 3:
                if (currentPage < 5) {
                    return buttonIndex + 1;
                } else if (currentPage > totalPagesCount - 3) {
                    return totalPagesCount - 3;
                }
                return currentPage;

            case 4:
                if (currentPage < 5) {
                    return buttonIndex + 1;
                } else if (currentPage === 5) {
                    return 6;
                } else if (currentPage > totalPagesCount - 3) {
                    return totalPagesCount - 2;
                }
                return currentPage + 1;

            case 5:
                return currentPage > totalPagesCount - 4
                    ? totalPagesCount - 1
                    : '...';

            case 6:
                return totalPagesCount;

            default:
                return '';
        }
    } else {
        return buttonIndex + 1;
    }
};

const isActive = (
    buttonIndex: number,
    currentPage: number,
    totalPagesCount: number,
) => {
    if (totalPagesCount >= 8) {
        if (currentPage === buttonIndex + 1 && currentPage < 5) {
            return true;
        } else if (
            currentPage > 4 &&
            currentPage < totalPagesCount - 4 &&
            buttonIndex === 3
        ) {
            return true;
        } else if (currentPage === totalPagesCount - 4 && buttonIndex === 3) {
            return true;
        } else if (currentPage === totalPagesCount - 3 && buttonIndex === 3) {
            return true;
        } else if (currentPage === totalPagesCount - 2 && buttonIndex === 4) {
            return true;
        } else if (currentPage === totalPagesCount - 1 && buttonIndex === 5) {
            return true;
        } else if (currentPage === totalPagesCount && buttonIndex === 6) {
            return true;
        }
        return false;
    } else {
        if (currentPage === buttonIndex + 1) {
            return true;
        }
        return false;
    }
};

const isDisabled = (
    buttonIndex: number,
    currentPage: number,
    totalPagesCount: number,
) => {
    if (totalPagesCount === 1) {
        return true;
    }
    if (totalPagesCount >= 8) {
        if (buttonIndex === 1 && currentPage > 4) {
            return true;
        } else if (buttonIndex === 5 && currentPage < totalPagesCount - 4) {
            return true;
        }
        return false;
    }
    return false;
};

export default { pageNumber, isActive, isDisabled };
