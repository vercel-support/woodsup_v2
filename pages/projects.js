import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/projects.module.sass'
import projects_de from '../data/projects_de.json'
import { i18n, withTranslation } from '../i18n'

import projects_en from '../data/projects_en.json'
import projects_es from '../data/projects_es.json'

let projectsList = projects_de.projects
let lang = i18n.language
console.log("language")
if (lang === 'de') {
  projectsList = projects_de.projects;
}
else if (lang === 'en') {
  projectsList = projects_en.projects;
}
else if (lang === 'es') {
  projectsList = projects_es.projects;

}

// const projectsList = projects_de.projects;
const sortedList = projectsList.sort((a, b) => b.id - a.id)
const Projects = ({t,props}) => {
  const router = useRouter()

  return (
    <div className={styles.home}>
    {sortedList.map((project) => (
      <div key={project.id}>
                {project.image ? (
                  <div className={styles.box}>
                    <img
                      className={styles.projectImg}
                      src={project.image}
                      alt="Projectpicture"
                    />
                    <div className={styles.mask}>
                      {/* <Link
                        href={`/projects/${project.id}`}
                        props={project}
                      > */}
                       <a className={styles.link} props={project}> <p className={styles.project_title} onClick={() => {
        router.push({
          pathname: '/projects/[pid]',
          query: { pid: project.id },
        })
      }}>
      {project.title}</p></a>
                      {/* </Link> */}
                    </div>
                  </div>
                ) : (
                  <div className={styles.project_heading}>
                    <Link
                      href={`/projects/${project.id}`}
                      props={project.image}
                      replace
                    >
                     <a className={styles.link_without_image}><p>• {project.title}</p></a> 
                    </Link>
                  </div>
                )}
              </div>
                ))}
  </div>
)
}

Projects.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Projects.propTypes = {
  t: PropTypes.func.isRequired,
}
export default withTranslation('common')(Projects)
