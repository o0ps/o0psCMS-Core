<?php

namespace o0psCore\Mapper;

/**
 * Class Rule
 * @package o0psCore\Mapper
 */
class Rule
{
    /**
     * @var \o0psCore\Options\ModuleOptions
     */
    protected $options;

    /**
     * @var \Doctrine\ORM\EntityManager
     */
    protected $entityManager;

    /**
     * @var \Zend\Mvc\I18n\Translator
     */
    protected $translatorHelper;

    /**
     * @return array|bool
     */
    public function findResources()
    {
        $entityManager = $this->getEntityManager();

        try {
            $users = $entityManager->getRepository('o0psCore\Entity\Resource')
                ->findAll();
        } catch (\Exception $e) {
            return false;
        }

        return $users;
    }

    /**
     * @return array|bool
     */
    public function findPrivileges()
    {
        $entityManager = $this->getEntityManager();

        try {
            $users = $entityManager->getRepository('o0psCore\Entity\Privilege')
                                   ->findAll();
        } catch (\Exception $e) {
            return false;
        }

        return $users;
    }

    /**
     * @return array|bool
     */
    public function findRoles()
    {
        $entityManager = $this->getEntityManager();

        try {
            $users = $entityManager->getRepository('o0psCore\Entity\Role')
                                   ->findAll();
        } catch (\Exception $e) {
            return false;
        }

        return $users;
    }

    /**
     * @param $options
     *
     * @return $this
     */
    public function setOptions($options)
    {
        $this->options = $options;

        return $this;
    }

    /**
     * get options
     *
     * @return \o0psCore\Options\ModuleOptions
     */
    protected function getOptions()
    {
        return $this->options;
    }

    /**
     * @param $entityManager
     *
     * @return $this
     */
    public function setEntityManager($entityManager)
    {
        $this->entityManager = $entityManager;

        return $this;

    }

    /**
     * get entityManager
     *
     * @return \Doctrine\ORM\EntityManager
     */
    protected function getEntityManager()
    {
        return $this->entityManager;
    }

    /**
     * @param $translatorHelper
     *
     * @return $this
     */
    public function setTranslatorHelper($translatorHelper)
    {
        $this->translatorHelper = $translatorHelper;

        return $this;

    }

    /**
     * get translatorHelper
     *
     * @return  \Zend\Mvc\I18n\Translator
     */
    protected function getTranslatorHelper()
    {
        return $this->translatorHelper;
    }
}