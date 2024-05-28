import resume from "../assets/resume/Muhammad Harris Malik Resume - 2024.pdf";
export const openResume = () => {
    window.open(resume,'_blank')
}

export const handleSocialLink = social => {
    switch (social) {
        case 'linkedin':
            window.open('https://linkedin.com/in/mharrismalik', '_blank');
            break;
        case 'instagram':
            window.open('https://instagram.com/mharrismalik', '_blank');
            break;
        case 'github':
            window.open('https://github.com/harrismalik', '_blank');
    }
}