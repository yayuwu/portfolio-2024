import { db } from "../data/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

const useProjects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const getProjects = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "projects"))
                const projectsList = await Promise.all(
                    querySnapshot.docs.map(async (doc) => {
                        const projectData = doc.data()

                        const imagesSnapshot = await getDocs(collection(db, `projects/${doc.id}/images`))

                        const images = imagesSnapshot.docs.map((imgdoc) => imgdoc.data())

                        const tecnologiesSnapshot = await getDocs(collection(db, `projects/${doc.id}/tecnologies`))

                        const tecnologies = tecnologiesSnapshot.docs.map((tecnologydoc) => tecnologydoc.data())

                        const linksSnapshot = await getDocs(collection(db, `projects/${doc.id}/links`))

                        const links = linksSnapshot.docs.map((linkdoc) => linkdoc.data())

                        return {
                            id: doc.id,
                            ...projectData,
                            images,
                            tecnologies,
                            links
                        }
                    })
                )
                setProjects(projectsList)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        getProjects()
    }, [])

    return { projects, loading, error }
}

export default useProjects

