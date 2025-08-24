class helpers {
    static formatText(item) {
        if (item == null)
            return "";

        if (typeof item === 'string')
            return item

        if (item.style.trim() === '')
            return item.text
        if (item.style.includes('italic')) {
            item.style = item.style.replace('italic', '');
            return `<em>${helpers.formatText(item)}</em>`;
        }
        if (item.style.includes('underline')) {
            item.style = item.style.replace('underline', '');
            return `<u>${helpers.formatText(item)}</u>`;
        }
        if (item.style.includes('bold')) {
            item.style = item.style.replace('bold', '');
            return `<strong>${helpers.formatText(item)}</strong>`;
        }
        if (item.style.includes('strikethrough')) {
            item.style = item.style.replace('strikethrough', '');
            return `<s>${helpers.formatText(item)}</s>`;
        }

        return item.text;
    }

    static buildText(enrichment_arr) {
        if (enrichment_arr == null)
            return "";

        if (typeof enrichment_arr === 'string')
            return enrichment_arr;

        let text = enrichment_arr.map((item) => helpers.formatText(item));

        return text.join('');
    }

    static renderChips(items = [], variant = "") {
        if (!items || !items.length) return "";
        const cls = variant ? ` chip--${variant}` : "";
        return `<div class="chip-group">${items.map(i => `<span class="chip${cls}">${i}</span>`).join('')}</div>`;
    }

    static createPrintable() {
        const headerName = document.querySelector('.top-banner h1')?.textContent || (data.about?.name || 'My Resume');
        const photo = document.getElementById('avatar').children[0].src || '';

        const itemsToRender = [
            'my-info', 'education-list', 'experience-list', 'projects-list', 'skills-list'
        ];

        const renderables = Object.fromEntries(
            itemsToRender.map((item) => {
                let element = document.getElementById(item);
                element.querySelectorAll(".chip-group").forEach(node => {
                    node.remove();
                });
                element.querySelectorAll(".chip-title").forEach(node => {
                    node.remove();
                });
                return [item, element.innerHTML]
            })
        );

        return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8"/>
                <title>Resume — ${headerName}</title>
                <style>
                    @page { size: A4; margin: 12mm; }
                    body { font-family: Arial, sans-serif; line-height: 1.35; color: #000; }
                    h2,h3,h4 { color: #000; margin: 0 0 6px 0; }
                    img { max-width: 120px; border-radius: 50%; }
                    header { display:flex; align-items:center; gap:16px; margin-bottom:12px; }
                    section { margin-bottom: 20px; page-break-inside: avoid; }
                    .experience-entry { border: 1px solid lightgray; border-radius: 10px; padding: 10px; margin-bottom: 10px; }
                    .project-entry { border: 1px solid lightgray; border-radius: 10px; padding: 10px; margin-bottom: 10px; }
                    .education-entry { padding: 10px; }
                    .chip { display: inline-block; padding: 6px 10px; border-radius: 9999px; background: #eef2f7; border: 1px solid #d5dbe3; font-size: 0.9rem;
                    line-height: 1; white-space: nowrap; margin-right: 3px; margin-bottom: 3px;}
                    .chip--skill { background: #f2fbf2; border-color: #40ef40; }
                    .chip--soft-skill { background: #f1e0bf; border-color: #efb840; }
                </style>
            </head>
            <body>
                <header>
                    ${photo ? `<img src="${photo}" alt="Profile"/>` : ''}
                    <div>
                        <h1>${headerName}</h1>
                        ${renderables["education-list"]}
                    </div>
                </header>
                <section>
                    <div>${renderables["my-info"]}</div>
                </section>
                <section>
                    <h2>Experience</h2>
                    <div>${renderables["experience-list"]}</div>
                </section>
                <section>
                    <h2>Projects</h2>
                    ${renderables["projects-list"]}
                </section>
                <section>
                    <h2>Skills</h2>
                    ${renderables["skills-list"]}
                </section>
            </body>
        </html>
     `;
    }
}


function renderAvatar(about) {
    const container = document.getElementById('avatar');
    container.innerHTML = `<img id="headerAvatar" src="${about.img}" alt="Profile photo"/>`
}

function renderAbout(about) {
    const container = document.getElementById('about-information');
    container.innerHTML = `
        <div class="two-cols">
            <div id="my-info" class="left-col">
                <h2>About Me</h2>
                <p>${about.text}</p>
            </div>
            <div class="right-col"><img class="about-photo" src="${about.img}" alt="" /></div>
        </div>
    `;
}

function renderExperience(experiences) {
    const container = document.getElementById('experience-list');
    container.innerHTML = experiences.map(exp => `
        <div class="experience-entry">
            <div class="entry-title">
                <h3>${exp.title} — ${exp.company}</h3>
                <p><em>${exp.from} - ${exp.to}</em></p>        
            </div>
            <div class="entry-section">
                <div>${helpers.buildText(exp.description)}</div>        
            </div>
            <div class="entry-section">
                <div><strong>Key Contributions:</strong></div>
                <ul style="padding-left: 20px">
                ${exp.contributions.map(e => `<li>${helpers.buildText(e)}</li>`).join('')}     
                </ul>
            </div>
            <div class="entry-section">
                <div class="chip-title"><strong>Languages:</strong></div>
                ${helpers.renderChips(exp.languages, 'lang')}       
                <div class="chip-title"><strong>Stacks:</strong></div>
                ${helpers.renderChips(exp.stacks, 'stack')}       
            </div>                  
        </div>
  `).join('');
}

function renderProjects(projects) {
    const container = document.getElementById('projects-list');
    container.innerHTML = projects.map(proj => `
        <div class="project-entry">
            <h3>${proj.name}</h3>
            <p>${proj.description}</p>
            <div id="project-tech-list" class="chip-group">
                ${(proj.tech).map(s => `<span class="chip chip--project">${s}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderSkills(experiences, skills) {
    const container = document.getElementById('skills-list');
    let additionalSkills = [];
    experiences.map((experience) => {
        experience.languages.map(language => additionalSkills.push(language))
        experience.stacks.map(stack => additionalSkills.push(stack))
    });

    const seen = new Set();
    let skillsToShow = [];
    additionalSkills.forEach((skill) => {
        if (!seen.has(skill)) {
            skillsToShow.push({ soft: false, skill: skill });
            seen.add(skill);
        }
    });
    skills.forEach((skill) => {
        if (!seen.has(skill)) {
            skillsToShow.push({ soft: true, skill: skill });
            seen.add(skill);
        }
    });

    skillsToShow.sort((a, b) => a.skill.localeCompare(b.skill));

    container.outerHTML = `
        <div id="skills-list" class="chip-group">
            ${(skillsToShow || []).map(s => `
                <span class="chip ${s.soft ? "chip--soft-skill" : "chip--skill"}">${s.skill}</span>
            `).join('')}
        </div>
    `;
}

function renderEducation(education) {
    const container = document.getElementById('education-list');
    container.innerHTML = education.map(ed => `
        <div class="education-entry">
            <!-- SOURCED FROM LINKEDIN PUBLIC ICONS -->  
            <h3>
                <img width="30" src="https://media.licdn.com/dms/image/v2/C560BAQHUAusLnQ4ZMw/company-logo_100_100/company-logo_100_100/0/1631377965583?e=1758758400&amp;v=beta&amp;t=OJd5K8jSNt4QmR_P142JJ70RYNbo4GvnXUuc9qPNE7g" height="24" alt="University of Oklahoma – Gallogly College of Engineering logo" />
                ${ed.school}
            </h3>
            <p>${ed.degree} — ${ed.year}</p>
        </div>
  `).join('');
}

function renderContact(info) {
    const container = document.getElementById('contact-information');
    container.innerHTML = `
        ${info.map(i => `
            <span style="padding: 10px">
                <a href="${i.link}" target="_blank"><img width="25" src="${i.img}" height="25" alt="LinkedIn" /></a>
            </span>
        `).join('')}
        <span style="padding: 10px; cursor: pointer;" id="download-pdf" onclick="openPrintableResume()">
            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/pdf-2.png" alt="pdf-2"/>
        </span>
    `;
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId)?.classList.add('active');

    const header = document.querySelector('.top-banner');
    const aboutPhoto = document.querySelector('#about .about-photo');

    const onAbout = sectionId === 'about';
    if (header)
        header.classList.toggle('has-avatar', !onAbout);
    if (aboutPhoto)
        aboutPhoto.classList.toggle('is-collapsed', !onAbout);
}

fetch('resume.json')
    .then(res => res.json())
    .then(data => {
        renderAvatar(data.about);
        renderAbout(data.about);
        renderExperience(data.experience);
        renderProjects(data.projects);
        renderSkills(data.experience, data.skills);
        renderEducation(data.education);
        renderContact(data.contacts)
    });

function openPrintableResume() {
    const printable = window.open('about:blank');

    const html = helpers.createPrintable();

    if (printable && !printable.closed) {
        printable.document.open();
        printable.document.write(html);
        printable.document.close();
        printable.onload = () => printable.print();
        try {
            printable.focus();
        } catch {}
        return;
    }

    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();
    iframe.onload = () => {
        try {
            iframe.contentWindow.focus();
        } catch {}
        iframe.contentWindow.print();
        setTimeout(() => document.body.removeChild(iframe), 1000);
    };
}
