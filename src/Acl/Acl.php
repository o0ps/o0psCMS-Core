<?php

namespace o0psCore\Acl;

use Zend\Permissions\Acl\Acl as ZendAcl,
    Zend\Permissions\Acl\Role\GenericRole as Role,
    Zend\Permissions\Acl\Resource\GenericResource as Resource;

/**
 * Class Acl
 * @package o0psCore\Acl
 */
class Acl extends ZendAcl
{
    /**
     * Default Role
     */
    const DEFAULT_ROLE = 'guest';

    /**
     * Constructor
     *
     * @param array $config
     *
     * @throws \Exception
     */
    public function __construct($config)
    {
        if (!isset($config['acl']['roles']) || !isset($config['acl']['resources'])) {
            throw new \Exception('Invalid ACL Config found');
        }

        $roles = $config['acl']['roles'];
        if (!isset($roles[self::DEFAULT_ROLE])) {
            $roles[self::DEFAULT_ROLE] = '';
        }

        $this->_addRoles($roles)
             ->_addResources($config['acl']['resources']);
    }

    /**
     * Adds Roles to ACL
     *
     * @param array $roles
     *
     * @return $this
     */
    protected function _addRoles($roles)
    {
        foreach ($roles as $name => $parent) {
            if (!$this->hasRole($name)) {
                if (empty($parent)) {
                    $parent = [];
                } else {
                    $parent = explode(',', $parent);
                }

                $this->addRole(new Role($name), $parent);
            }
        }

        return $this;
    }

    /**
     * Adds Resources to ACL
     *
     * @param $resources
     *
     * @return $this
     * @throws \Exception
     */
    protected function _addResources($resources)
    {
        foreach ($resources as $permission => $controllers) {
            foreach ($controllers as $controller => $actions) {
                if ($controller == 'all') {
                    $controller = null;
                } else {
                    if (!$this->hasResource($controller)) {
                        $this->addResource(new Resource($controller));
                    }
                }

                foreach ($actions as $action => $role) {
                    if ($action == 'all') {
                        $action = null;
                    }

                    if ($permission == 'allow') {
                        $this->allow($role, $controller, $action);
                    } elseif ($permission == 'deny') {
                        $this->deny($role, $controller, $action);
                    } else {
                        throw new \Exception('No valid permission defined: ' . $permission);
                    }
                }
            }
        }

        return $this;
    }
}
